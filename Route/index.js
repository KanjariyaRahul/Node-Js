const express = require('express');

// Initializing the app.
const app = express();
app.use(express.json());

// Basic Get Request
app.get('/', (request, response) => {
    response.send("welcome to nodejs api");
});

// Parameterise Get Request
app.get('/login/:username/:password', (request, response) => {
    const { username, password } = request.params;
    response.send("Parameterize Get Request Destructuring: " + username + "-" + password);
});

// Get request with query string
app.get('/login', (request, response) => {
    const { username, password } = request.query;
    response.send("Parameterize Get Request Destructuring: " + username + "-" + password);
});

// Post Request with payload (body)
app.post('/login', (request, response) => {
    const { username, password } = request.body;
    response.send({
        "redirect": "userpanel",
        "host": "atmiyauniversity",
        "myusername": username,
        "mypassword": password
    });
});

// Listening on port 2000
app.listen(2000, () => {
    console.log('listening at http://localhost:2000');
});