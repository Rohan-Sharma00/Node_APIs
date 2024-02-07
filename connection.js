const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const database = "employee_management"; 
const collection = "employees"; 


mongoose.connect(`${url}/${database}`);

const employeeSchema = new mongoose.Schema({
  eID: { type: Number, unique: true },
  eName: String,
  ePhoneNo: Number,
  eEmailID:String,
  ePosition:String,
  eAddress:String,
  eSalary: Number,
  ePhoto:String,
  isDeleted:Boolean
});

// Create a model based on the schema
const getEmployeeModel = mongoose.model("Employee", employeeSchema);

// Function to connect to the database
async function connectDB() {
  try {
    // Check if the connection to MongoDB is successful
    console.log('##inside connectDB')
    await mongoose.connect(`${url}/${database}`);
    console.log(`Connected to MongoDB:`);


    // Check if the collection exists
    const collectionExists = await mongoose.connection.db.listCollections({ name: collection }).hasNext();

    if (!collectionExists) {
      // If the collection does not exist, create it
      await mongoose.connection.db.createCollection(collection);
      console.log(`Collection created.`);
    }

    return getEmployeeModel; // Return the Mongoose model for the 'employees' collection
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = connectDB;
