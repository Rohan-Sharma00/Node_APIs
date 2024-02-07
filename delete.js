let connection=require("./connection");
const mongoose = require("mongoose");

async function  deleteData(id)
{
    console.log("delete id",id);
    let collection=await connection();
    try{
    let result=await collection.updateOne(
        { eID: id } ,
    {$set:{isDeleted:true}
    }
        );
        return result;
    // if(result.acknowledged && result.modifiedCount && result.matchedCount)
    // {
        
    //     console.log("Data soft deleted successfully");
    //     return {"result":true};
    // }
    // else
    // {
    //     console.log("Data did not soft deleted successfully");
    //     return {"result":false};
    // }
}
    
    finally {
        if (collection) {
            await mongoose.connection.close();
          }
    }
}

module.exports=deleteData;