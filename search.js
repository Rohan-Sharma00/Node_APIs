let connection=require("./connection");
const mongoose = require("mongoose");

async function  searchAll()
{
    let collection=await connection();
    try{
    // console.log("## in search all");
    let result=await collection.find({
        $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }]
    });
    return result;
    }
    finally
    {
    if (collection) {
        await mongoose.connection.close();
      }
    }
   
}
async function  searchById(id)
{
    let collection = await connection();
    try {
        let result = await collection.find({ eID: id , isDeleted: false});
        return result;
    } finally {
        if (collection) {
            await mongoose.connection.close();
          }
    }
}

module.exports={searchAll:searchAll,
    searchById:searchById};