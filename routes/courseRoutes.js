const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses } = require('../controllers/courseController');
const { verifyToken, isFaculty, isAdmin } = require('../middlewares/authMiddleware');

// Admin or faculty can create
router.post('/', verifyToken, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'faculty') {
    return next();
  }
  return res.status(403).json({ message: 'Only admin or faculty can create courses' });
}, createCourse);

// All users can view
router.get('/', verifyToken, getAllCourses);

module.exports = router;
