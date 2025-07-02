const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const { title, description, department } = req.body;
    const facultyId = req.user.id; // from token
    const course = await Course.create({ title, description, department, facultyId });
    res.status(201).json({ message: 'Course created', course });
  } catch (err) {
    res.status(500).json({ message: 'Error creating course', error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err.message });
  }
};
