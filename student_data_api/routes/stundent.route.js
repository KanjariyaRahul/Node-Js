const express = require('express');
const studentController = require('./../controller/student.controller');
// const uservalidation = require('./../validator/studentValidator');


//route Instances
const router = express.Router();

router.get('/students', studentController.index)
router.get('/student/:enrollmentNo', studentController.show)
    // router.post('/student', uservalidation.createStudent, studentController.store)
router.post('/student', studentController.store)
router.put('/student', studentController.update)
router.delete('/student', studentController.destroy)




// router.get('/student', (req, res) => {
//     res.json({
//         "status": "Run successfully",
//         "students": [
//             {"stu_id": 1,"stu_name": "Abc","mobile_no": 1234567891,"city": "DCb"},
//             {"stu_id": 2,"stu_name": "Abc","mobile_no": 1234567891,"city": "DCb"},
//             {"stu_id": 3,"stu_name": "Abc","mobile_no": 1234567891,"city": "DCb"},
//             {"stu_id": 4,"stu_name": "Abc","mobile_no": 1234567891,"city": "DCb"},
//             {"stu_id": 5,"stu_name": "Abc","mobile_no": 1234567891,"city": "DCb"},

//         ],
//         "messages": "Retrive Successfully"
//     })
// })

// router.post('/student', (req, res) => {
//     res.json({
//         "status": "Run successfully",
//         "students": {
//             "stu_name": req.body.stu_name,
//             "mobile_no": req.body.mobile_no,
//             "city": req.body.city
//         },
//         "messages": "Insert Successfully"
//     })

// })

// router.get("/student/:stu_id", (req, res) => {
//     const id = req.params.stu_id;
//     res.json({
//         "status": "Run successfully",
//         "students": [{
//             "stu_id": id,
//             "stu_name": "Abc",
//             "mobile_no": 1234567891,
//             "city": "DCb"
//         }],
//         "messages": "Retrive Successfully"
//     })

// })

// router.put("/student", (req, res) => {
//     res.json({
//         "status": "Run successfully",
//         "students": {
//             "stu_id": req.body.stu_id,
//             "stu_name": req.body.stu_name,
//             "mobile_no": req.body.mobile_no,
//             "city": req.body.city
//         },
//         "messages": "Updated Successfully"
//     })
// })

// router.delete("/student", (req, res) => {
//     res.json({
//         "stud_id": req.body.stu_id,
//         "messages": "Delete Successfully"
//     })
// })

module.exports = router;