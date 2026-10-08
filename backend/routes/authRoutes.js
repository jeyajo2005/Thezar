const express = require('express');
const router = express.Router();
const {
  getSetupStatus,
  sendOtp,
  verifyOtpAndRegisterSuperAdmin,
  login,
  sendLoginOtp,
  verifyLoginOtp,
  getProfile,
  updateProfile,
  getAllUsers,
  updateUserRole,
  googleAuth,
  ethAuth,
  getGoogleAuthUrl,
  googleCallback
} = require('../controllers/authController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// 1. Setup Status & Single SuperAdmin Registration with OTP
router.get('/setup-status', getSetupStatus);
router.post('/send-otp', sendOtp);
router.post('/register-superadmin', verifyOtpAndRegisterSuperAdmin);

// 2. Authentication Endpoints (Password, Email OTP, Google OAuth, Ethereum Web3)
router.post('/login', login);
router.post('/send-login-otp', sendLoginOtp);
router.post('/login-otp', verifyLoginOtp);
router.get('/google/url', getGoogleAuthUrl);
router.get('/google/callback', googleCallback);
router.post('/google', googleAuth);
router.post('/ethereum', ethAuth);

// 3. Authenticated User Profile Endpoints (JWT Guarded)
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

// 4. Super Admin Role Management Endpoints
router.get('/users', verifyToken, authorizeRoles('super_admin', 'superadmin'), getAllUsers);
router.put('/users/:id/role', verifyToken, authorizeRoles('super_admin', 'superadmin'), updateUserRole);

module.exports = router;
