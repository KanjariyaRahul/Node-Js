const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors'); // Fixed import statement for 'cors'
const app = express();

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies

// Import routes
const srouter = require('./routes/stundent.route');



const uri = "mongodb+srv://rahulkanjariya9265:rahul@9265/Mydata";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Use routes
app.use("/api", srouter);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});