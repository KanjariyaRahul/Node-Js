// Get all students
const Student = require('./../model/Student');
exports.index = (req, res) => {
    res.json({
        status: "Run successfully",
        data: [{
                "stud_name": "rahul",
                "enrollment": "230823045",
                "program": "MCA",
                "semester": "3rd",
                "contact": {
                    "email": "rahul@example.com",
                    "mobile": "9265614292",
                    "address": "123 Main St, Hometown, USA"
                },
                "dateOfBirth": "2003-02-22",
                "gender": "Male",
                "image": "https://example.com/images/alice.jpg",
                "bloodGroup": "O+",
                "batch": "Batch 2025"
            },
            {
                "stud_name": "Jay",
                "enrollment": "230823056",
                "program": "Electrical Engineering",
                "semester": "5th",
                "contact": {
                    "email": "bob.smith@example.com",
                    "mobile": "6142926587",
                    "address": "456 Elm St, Metropolis, USA"
                },
                "dateOfBirth": "2001-08-22T00:00:00.000Z",
                "gender": "Male",
                "image": "https://example.com/images/bob.jpg",
                "bloodGroup": "A-",
                "batch": "Batch 2024"
            },
            {
                "stud_name": "jeet",
                "enrollment": "230823045",
                "program": "Mechanical Engineering",
                "semester": "2nd",
                "contact": {
                    "email": "jeet@example.com",
                    "mobile": "5629265412",
                    "address": "789 Oak St, Big City, USA"
                },
                "dateOfBirth": "2003-12-01T00:00:00.000Z",
                "gender": "Male",
                "image": "https://example.com/images/carol.jpg",
                "bloodGroup": "B+",
                "batch": "Batch 2026"
            }

        ],
        messages: "Retrieved Successfully"
    });
};

// Store a new student
exports.store = async(req, res) => {

    try {
        console.log(req.body)
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    // const { stud_name, program, enrollmentNo, dob, bloodGroup, mobileNumber, email, address } = req.body;
    // res.json({
    //     status: "Run successfully",
    //     data: {
    //         stud_name,
    //         program,
    //         enrollmentNo,
    //         dob,
    //         bloodGroup,
    //         mobileNumber,
    //         email,
    //         address
    //     },
    //     messages: "Inserted Successfully"
    // });
};


// Show a specific student by ID
exports.show = (req, res) => {
    const { enrollmentNo } = req.params;

    // Example data; replace with actual student data retrieval logic
    const students = [{
            "stud_name": "rahul",
            "enrollment": "230823045",
            "program": "MCA",
            "semester": "3rd",
            "contact": {
                "email": "rahul@example.com",
                "mobile": "9265614292",
                "address": "123 Main St, Hometown, USA"
            },
            "dateOfBirth": "2003-02-22",
            "gender": "Male",
            "image": "https://example.com/images/alice.jpg",
            "bloodGroup": "O+",
            "batch": "Batch 2025"
        },
        {
            "stud_name": "Jay",
            "enrollment": "230823056",
            "program": "Electrical Engineering",
            "semester": "5th",
            "contact": {
                "email": "bob.smith@example.com",
                "mobile": "6142926587",
                "address": "456 Elm St, Metropolis, USA"
            },
            "dateOfBirth": "2001-08-22T00:00:00.000Z",
            "gender": "Male",
            "image": "https://example.com/images/bob.jpg",
            "bloodGroup": "A-",
            "batch": "Batch 2024"
        },
        {
            "stud_name": "jeet",
            "enrollment": "230823045",
            "program": "Mechanical Engineering",
            "semester": "2nd",
            "contact": {
                "email": "jeet@example.com",
                "mobile": "5629265412",
                "address": "789 Oak St, Big City, USA"
            },
            "dateOfBirth": "2003-12-01T00:00:00.000Z",
            "gender": "Male",
            "image": "https://example.com/images/carol.jpg",
            "bloodGroup": "B+",
            "batch": "Batch 2026"
        }
    ];

    const student = students.find(s => s.enrollmentNo === parseInt(enrollmentNo));

    if (student) {
        res.json({
            status: "Run successfully",
            data: student,
            messages: "Retrieved Successfully"
        });
    } else {
        res.status(404).json({
            status: "Error",
            messages: "Student not found"
        });
    }
};

// Show a specific student by ID
// exports.show = (req, res) => {
//     const { enrollmentNo } = req.params;
//     res.json({
//         status: "Run successfully",
//         data: {
//             enrollmentNo: 230823045,
//             stud_name: "jay", // Example data; replace with actual student data retrieval logic
//             program: "MCA",
//             dob: "2002-02-22",
//             bloodGroup: "O+",
//             mobileNumber: 5654898415,
//             email: "jay@gmail.com",
//             address: "123 Main Street rajkot "

//         },
//         messages: "Retrieved Successfully"
//     });
// };

// Update a student's information
exports.update = (req, res) => {
    const { stud_name, program, enrollmentNo, dob, bloodGroup, mobileNumber, email, address } = req.body;
    res.json({
        status: "Run successfully",
        data: {
            stud_name,
            program,
            enrollmentNo,
            dob,
            bloodGroup,
            mobileNumber,
            email,
            address
        },
        messages: "Updated Successfully"
    });
};

// Delete a student
exports.destroy = (req, res) => {
    const { enrollmentNo } = req.body;
    res.json({
        status: "Run successfully",
        data: { enrollmentNo },
        messages: "Deleted Successfully"
    });
};