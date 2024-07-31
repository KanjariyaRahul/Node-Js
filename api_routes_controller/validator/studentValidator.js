const Joi = require('joi');

const studschema = Joi.object({
    stu_name: Joi.string().required(),
    mobile_no: Joi.number().required(),
    city: Joi.string().required()
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