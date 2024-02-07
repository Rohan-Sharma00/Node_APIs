let connection = require("./connection");
const mongoose = require("mongoose");

async function insertData(data) {
    console.log("in insert data",data);
    let collection = await connection();
    let newEID;
    
    try{

        const latestDoc = await collection.find().sort({ eID: -1 });
        console.log("latest doc = ",latestDoc);
    if (latestDoc && latestDoc.length > 0) {
        
        newEID = latestDoc[0].eID+1;
      console.log('Latest Document id:', newEID);
    } else {
      console.log('No documents found in the collection.');
      newEID=1;
    }
    
        data.eID = newEID;

        let result;
        if (Array.isArray(data)) {
            result = await collection.insertMany(data);
        }
        else {
            result = await collection.create(data);
        }

        // if (result) {

        //     console.log("Data inserted successfully");
        // }
        // else {
        //     console.log("Data did not inserted successfully");
        // }
        return result;
    }
    finally {
        
        if (collection) {
            await mongoose.connection.close();
          }
    }



    
}



module.exports = insertData;