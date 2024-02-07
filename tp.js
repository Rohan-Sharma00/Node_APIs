let connection=require("./connection");
const mongoose = require("mongoose");

async function  updateData()
{
    let id=3;
    let body={
        ename: 'Jane Smith',
        eaddress: '456 Oak St, Townsville',
      //  image: null
      };
    let collection=await connection();
    try{
    let collection=await connection();
    console.log("in update data = id",id,body);
    let result=await collection.updateOne(
        { eID: id } ,
    {$set:body}
        );
        console.log("in update result",result);
    if(result.acknowledged )
    {
        console.log("Data updated successfully");
    }
    else
    {
        console.log("Data did not updated successfully");
    }
    return result;
}
finally {
    if (collection) {
        await mongoose.connection.close();
      }
}
}

updateData();