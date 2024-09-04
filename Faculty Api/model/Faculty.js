const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    experience: {
        type: Number, // Or use `Number` to accommodate decimal values for experience
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Faculty', facultySchema);