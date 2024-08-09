const Joi = require('joi');

const studschema = Joi.object({
    stud_name: Joi.string().min(3).max(30).required(),
    enrollment: Joi.string().pattern(/^[0-9]{9}$/).required(),
    program: Joi.string().required(),
    semester: Joi.string().valid('1st', '2nd', '3rd', '4th').required(),
    contact: Joi.object({
        email: Joi.string().email().required(),
        mobile: Joi.string().pattern(/^[0-9]{10}$/).required(),
        address: Joi.string().required()
    }).required(),
    dateOfBirth: Joi.date().iso().less('now').required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    image: Joi.string().uri().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
    batch: Joi.string().pattern(/Batch \d{4}/).required()
});

exports.createStudent = (req, res, next) => {
    const { error } = studschema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

// // Generalize the validation function for reusability
// exports.validateRequests = (req, res, next) => {
//     const { error } = schema.validate(req.body);

//     if (error) {
//         return res.status(400).json({ error: error.details[0].message });
//     }

//     next();
// }