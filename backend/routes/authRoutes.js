const express = require('express');
const router = express.Router();
const {
  login,
  register,
  googleAuth,
  getProfile,
  updateProfile,
  getAllUsers,
  updateUserRole
} = require('../controllers/authController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// Public Authentication Endpoints
router.post('/login', login);
router.post('/register', register);
router.post('/google', googleAuth);

// Authenticated User Profile Endpoints
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

// Super Admin User & Role Management Endpoints
router.get('/users', verifyToken, authorizeRoles('super_admin', 'superadmin'), getAllUsers);
router.put('/users/:id/role', verifyToken, authorizeRoles('super_admin', 'superadmin'), updateUserRole);

module.exports = router;
