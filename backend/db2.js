const { MongoClient } = require('mongodb');
const mongoose=require("mongoose");
// Connection URI
const uri = 'mongodb://127.0.0.1:27017/backendData';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchData() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database and collection
        const database = client.db('backendData');
        const collection = database.collection('fooditems');

        // Fetch data from the collection
        const data = await collection.find().toArray();
        global.fooditems=data;
        // Print the fetched data
        

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        
    } 
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database and collection
        const database = client.db('backendData');
        const collection = database.collection('foodcategory2');

        // Fetch data from the collection
        const data2 = await collection.find().toArray();
global.foodcategory2=data2;
        // Print the fetched data
        

        return data2;
    } catch (error) {
        console.error('Error fetching data:', error);
        
    } 
}

module.exports = fetchData;
