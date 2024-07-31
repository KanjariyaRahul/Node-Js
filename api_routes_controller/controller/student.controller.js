// Get all students
exports.index = (req, res) => {
    res.json({
        status: "Run successfully",
        data: [
            { stu_id: 1, stu_name: "Dhaval", mobile_no: 1234567891, city: "DCB" },
            { stu_id: 2, stu_name: "Jay", mobile_no: 1234567891, city: "Rajkot" },
            { stu_id: 3, stu_name: "Rahul", mobile_no: 1234567891, city: "Jamnagar" },
            { stu_id: 4, stu_name: "Parth", mobile_no: 1234567891, city: "DCB" },
            { stu_id: 5, stu_name: "Mukesh", mobile_no: 1234567891, city: "Rajkot" }
        ],
        messages: "Retrieved Successfully"
    });
};

// Store a new student
exports.store = (req, res) => {
    const { stu_name, mobile_no, city } = req.body;
    res.json({
        status: "Run successfully",
        data: {
            stu_name,
            mobile_no,
            city
        },
        messages: "Inserted Successfully"
    });
};

// Show a specific student by ID
exports.show = (req, res) => {
    const { stu_id } = req.params;
    res.json({
        status: "Run successfully",
        data: {
            stu_id,
            stu_name: "Abc", // Example data; replace with actual student data retrieval logic
            mobile_no: 1234567891,
            city: "DCB"
        },
        messages: "Retrieved Successfully"
    });
};

// Update a student's information
exports.update = (req, res) => {
    const { stu_id, stu_name, mobile_no, city } = req.body;
    res.json({
        status: "Run successfully",
        data: {
            stu_id,
            stu_name,
            mobile_no,
            city
        },
        messages: "Updated Successfully"
    });
};

// Delete a student
exports.destroy = (req, res) => {
    const { stu_id } = req.body;
    res.json({
        status: "Run successfully",
        data: { stu_id },
        messages: "Deleted Successfully"
    });
};