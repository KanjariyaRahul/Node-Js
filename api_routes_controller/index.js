const express = require('express');
const app = express();
app.use(express.json());

//import routes
const srouter = require('./routes/stundent.route')
app.use("/api", srouter);
app.listen(3000, () => {
    console.log("Run Successfully 3000")
});