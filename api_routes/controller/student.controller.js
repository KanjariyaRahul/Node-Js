exports.index = (req, res) => {
    res.json({
        "status": "Run successfully",
        "data": [
            { "stu_id": 1, "stu_name": "Abc", "mobile_no": 1234567891, "city": "DCb" },
            { "stu_id": 2, "stu_name": "Abc", "mobile_no": 1234567891, "city": "DCb" },
            { "stu_id": 3, "stu_name": "Abc", "mobile_no": 1234567891, "city": "DCb" },
            { "stu_id": 4, "stu_name": "Abc", "mobile_no": 1234567891, "city": "DCb" },
            { "stu_id": 5, "stu_name": "Abc", "mobile_no": 1234567891, "city": "DCb" },

        ],
        "messages": "Retrive Successfully"
    })
}

exports.store = (req, res) => {
    res.json({
        "status": "Run successfully",
        "data": {
            "stu_name": req.body.stu_name,
            "mobile_no": req.body.mobile_no,
            "city": req.body.city
        },
        "messages": "Insert Successfully"
    })

}

exports.show = (req, res) => {
    const id = req.params.stu_id;
    res.json({
        "status": "Run successfully",
        "data": [{
            "stu_id": id,
            "stu_name": "Abc",
            "mobile_no": 1234567891,
            "city": "DCb"
        }],
        "messages": "Retrive Successfully"
    })

}

exports.update = (req, res) => {
    res.json({
        "status": "Run successfully",
        "data": {
            "stu_id": req.body.stu_id,
            "stu_name": req.body.stu_name,
            "mobile_no": req.body.mobile_no,
            "city": req.body.city
        },
        "messages": "Updated Successfully"
    })
}

exports.destroy = (req, res) => {
    res.json({
        "status": "Run successfully",
        "data": { "stud_id": req.body.stu_id },
        "messages": "Delete Successfully"
    })
}