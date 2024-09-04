const Faculty = require('../model/Faculty');

exports.index = async(req, res) => {
    try {
        const faculty = await Faculty.find()
        res.status(200).json(faculty)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.show = async(req, res) => {
    try {
        const faculty = await Faculty.find({ "_id": req.params.id })
        res.status(200).json(faculty)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.insert = async(req, res) => {
    try {
        const faculty = await Faculty.create(req.body);
        res.status(201).json({ message: 'Inserted faculty record successfully!', data: faculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.update = async(req, res) => {
    exports.update = async (req, res) => {
        try {
            const faculty = await Faculty.findByIdAndUpdate(req.body.id, req.body, { new: true });
            if (!faculty) {
                return res.status(404).json({ message: 'Faculty not found' });
            }
            res.status(200).json({ message: 'Updated faculty record successfully!', data: faculty });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    
}

exports.delete = async(req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json({ message: 'Deleted faculty record successfully!', data: faculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

