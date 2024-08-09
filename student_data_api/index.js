const express = require('express');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON bodies

// Import routes
const srouter = require('./routes/stundent.route');

// Connection URI
const uri = "mongodb+srv://rahulkanjariya9265:rahul9265@rahul.tmr7j.mongodb.net/sample_mflix?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Use routes
app.use("/api", srouter);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});