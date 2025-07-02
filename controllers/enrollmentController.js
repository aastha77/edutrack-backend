const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.enrollInCourse = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { courseId } = req.body;

    const alreadyEnrolled = await Enrollment.findOne({ where: { studentId, courseId } });
    if (alreadyEnrolled) return res.status(400).json({ message: 'Already enrolled in this course' });

    const enrollment = await Enrollment.create({ studentId, courseId });
    res.status(201).json({ message: 'Enrollment successful', enrollment });
  } catch (err) {
    res.status(500).json({ message: 'Enrollment failed', error: err.message });
  }
};

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching enrollments', error: err.message });
  }
};
