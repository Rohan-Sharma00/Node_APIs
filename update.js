let connection=require("./connection");
const mongoose = require("mongoose");

async function  updateData(id,body)
{
    let collection=await connection();
    try{
    let collection=await connection();
    console.log("in update data = id",id,body);
    let result=await collection.updateOne(
        { eID: id } ,
    {$set:body}
        );
        console.log("in update result",result);
        return result;
    
}
finally {
    if (collection) {
        await mongoose.connection.close();
      }
}
}

module.exports=updateData;