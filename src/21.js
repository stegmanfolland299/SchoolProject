// Node.js Code to add student details to a database

const { MongoClient } = require('mongodb');

// Replace 'yourMongodbURI' with your actual MongoDB URI
let uri = "mongodb+srv://username:password@cluster0.mongodb.net/test?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    console.log("Connected to the database!");
    // Replace 'yourCollectionName' with the name of your MongoDB collection
    const db = client.db('schoolProject');
    const studentDetailsCollection = db.collection('students');

    // Add a new student record
    const studentDetails = {
      name: "John Doe",
      age: 20,
      email: "john.doe@example.com"
    };

    await studentDetailsCollection.insertOne(studentDetails);
    console.log("Student added successfully.");
  } catch (error) {
    console.error("An error occurred while connecting to the database:", error);
  }
}

connectToDatabase();
