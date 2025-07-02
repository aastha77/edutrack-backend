const express = require('express');
const router = express.Router();
const { markAttendance, getMyAttendance } = require('../controllers/attendanceController');
const { verifyToken, isFaculty, isStudent } = require('../middlewares/authMiddleware');

// Faculty marks attendance
router.post('/', verifyToken, isFaculty, markAttendance);

// Student views own attendance
router.get('/my', verifyToken, isStudent, getMyAttendance);

module.exports = router;
