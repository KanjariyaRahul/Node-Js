// Get all students
exports.index = (req, res) => {
    res.json({
        status: "Run successfully",
        data: [{
                stud_name: "John Doe",
                program: "MCA",
                enrollmentNo: 230823045,
                dob: "2000-01-01",
                bloodGroup: "O+",
                mobileNumber: "9265614292",
                email: "johndoe@example.com",
                address: "123 Main St, Anytown, Country"
            },
            {
                stud_name: "Jane Smith",
                program: "MCA",
                enrollmentNo: 230823056,
                dob: "1999-05-15",
                bloodGroup: "A-",
                mobileNumber: "5619869035",
                email: "janesmith@example.com",
                address: "456 Elm St, Othertown, Country"
            },
            {
                stud_name: "Emily Johnson",
                program: "BCA",
                enrollmentNo: 230459812,
                dob: "2001-11-23",
                bloodGroup: "B+",
                mobileNumber: "1564891682",
                email: "emilyjohnson@gmail.com",
                address: "789 Pine St, Sometown, Country"
            }

        ],
        messages: "Retrieved Successfully"
    });
};

// Store a new student
exports.store = (req, res) => {
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
        messages: "Inserted Successfully"
    });
};


// Show a specific student by ID
exports.show = (req, res) => {
    const { enrollmentNo } = req.params;

    // Example data; replace with actual student data retrieval logic
    const students = [{
            enrollmentNo: 230823045,
            stud_name: "John Doe",
            program: "MCA",
            dob: "2000-01-01",
            bloodGroup: "O+",
            mobileNumber: "9265614292",
            email: "johndoe@example.com",
            address: "123 Main St, Anytown, Country"
        },
        {
            enrollmentNo: 230823056,
            stud_name: "Jane Smith",
            program: "MCA",
            dob: "1999-05-15",
            bloodGroup: "A-",
            mobileNumber: "5619869035",
            email: "janesmith@example.com",
            address: "456 Elm St, Othertown, Country"
        },
        {
            enrollmentNo: 230459812,
            stud_name: "Emily Johnson",
            program: "BCA",
            dob: "2001-11-23",
            bloodGroup: "B+",
            mobileNumber: "1564891682",
            email: "emilyjohnson@gmail.com",
            address: "789 Pine St, Sometown, Country"
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