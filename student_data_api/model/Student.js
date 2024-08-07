const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
        stud_name: {
            type: String,
            required: true
        },
        enrollment: {
            type: String,
            required: true
        },
        program: {
            type: String,
            required: true
        },
        semester: {
            type: String,
            required: true
        },
        contact: {
            email: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        bloodGroup: {
            type: String,
            required: true
        },
        batch: {
            type: String,
            required: true
        }
    },
);

module.exports = mongoose.model('Student', studentSchema);
