const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// ✅ Protected route (admin only)
router.get('/admin-only', verifyToken, isAdmin, (req, res) => {
  res.json({ message: `Hello Admin ${req.user.id}` });
});

module.exports = router;
