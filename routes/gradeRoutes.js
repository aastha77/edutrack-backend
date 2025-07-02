const express = require('express');
const router = express.Router();
const { assignGrade, getMyGrades } = require('../controllers/gradeController');
const { verifyToken, isFaculty, isStudent } = require('../middlewares/authMiddleware');

// Faculty assigns grades
router.post('/', verifyToken, isFaculty, assignGrade);

// Student views their grades
router.get('/my', verifyToken, isStudent, getMyGrades);

module.exports = router;
