const express = require('express');
const router = express.Router();
const { enrollInCourse, getEnrollments } = require('../controllers/enrollmentController');
const { verifyToken, isStudent, isAdmin, isFaculty } = require('../middlewares/authMiddleware');

// Students can enroll
router.post('/', verifyToken, isStudent, enrollInCourse);

// Admin/Faculty can view enrollments
router.get('/', verifyToken, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'faculty') return next();
  return res.status(403).json({ message: 'Access denied' });
}, getEnrollments);

module.exports = router;
