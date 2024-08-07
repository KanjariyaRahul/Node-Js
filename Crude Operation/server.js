const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET all products
app.get('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": [
            {"id": 1, "name": "HP BAJJ32", "price": 45000, "category": "laptop"}, 
            {"id": 2, "name": "HP BAJ332", "price": 45000, "category": "laptop"}, 
            {"id": 3, "name": "HP BA3332", "price": 45000, "category": "laptop"}, 
            {"id": 4, "name": "HP BAJJ32", "price": 45000, "category": "laptop"}, 
            {"id": 5, "name": "HP BAJJ32", "price": 45000, "category": "laptop"}
        ],
        "message": "retrieved successfully"
    });
});

// GET a single product by ID
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        "status": "success",
        "data": {"id": id, "name": "HP BAJJ32", "price": 45000, "category": "laptop"}, 
        "message": "retrieved successfully"
    });
});

// POST a new product
app.post('/product', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "name": req.body.name,
            "price": req.body.price,
            "category": req.body.category
        },
        "message": "inserted successfully"
    });
});

// PUT update a product
app.put('/product', (req, res) => {
    console.log('PUT request body:', req.body); // Log the body
    res.json({
        "status": "success",
        "data": {
            "id": req.body.id,
            "name": req.body.name,
            "price": req.body.price,
            "category": req.body.category
        },
        "message": "updated successfully"
    });
});

app.delete('/product', (req, res) => {
    console.log('DELETE request body:', req.body); // Log the body
    res.json({
        "status": "success",
        "data": {"id": req.body.id},
        "message": "deleted successfully"
    });
});


// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
