const express = require('express');
const facultyController = require('./../controller/faculty');

const router = express.Router();

router.get('/faculty', facultyController.index);
router.get('/faculty/:id', facultyController.show); // Fixed route parameter to match controller
router.post('/faculty', facultyController.insert);
router.put('/faculty', facultyController.update); // Ensure you send the id in the request body
router.delete('/faculty/:id', facultyController.delete); // Fixed route parameter to match controller

module.exports = router;