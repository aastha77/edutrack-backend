const Attendance = require('../models/Attendance');

// Mark attendance (faculty only)
exports.markAttendance = async (req, res) => {
  try {
    const { studentId, courseId, date, status } = req.body;
    const record = await Attendance.create({ studentId, courseId, date, status });
    res.status(201).json({ message: 'Attendance marked', record });
  } catch (err) {
    res.status(500).json({ message: 'Error marking attendance', error: err.message });
  }
};

// View student’s attendance (for logged-in student)
exports.getMyAttendance = async (req, res) => {
  try {
    const studentId = req.user.id;
    const records = await Attendance.findAll({ where: { studentId } });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching attendance', error: err.message });
  }
};
