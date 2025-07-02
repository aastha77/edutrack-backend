const Grade = require('../models/Grade');

// Faculty/Admin assigns grade
exports.assignGrade = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body;
    const record = await Grade.create({ studentId, courseId, grade });
    res.status(201).json({ message: 'Grade assigned', record });
  } catch (err) {
    res.status(500).json({ message: 'Error assigning grade', error: err.message });
  }
};

// Student views their grades
exports.getMyGrades = async (req, res) => {
  try {
    const studentId = req.user.id;
    const grades = await Grade.findAll({ where: { studentId } });
    res.json(grades);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching grades', error: err.message });
  }
};
