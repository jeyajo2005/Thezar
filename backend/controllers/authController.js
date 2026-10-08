const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Otp = require('../models/Otp');
const { sendOtpEmail } = require('../services/emailService');
const { JWT_SECRET } = require('../middleware/authMiddleware');

// Helper to generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
      fullName: user.fullName
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// 1. Check if SuperAdmin is Already Configured (Setup Status)
exports.getSetupStatus = async (req, res) => {
  try {
    const superAdmin = await User.findOne({
      role: { $in: ['super_admin', 'superadmin'] }
    });

    res.json({
      success: true,
      hasSuperAdmin: !!superAdmin
    });
  } catch (error) {
    console.error('[Setup Status Error]:', error);
    res.status(500).json({ success: false, message: 'Error checking setup status' });
  }
};

// 2. Send OTP for SuperAdmin Registration
exports.sendOtp = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();

    if (!cleanEmail) {
      return res.status(400).json({ success: false, message: 'Valid email address is required' });
    }

    // Check if SuperAdmin already exists
    const superAdminExists = await User.findOne({
      role: { $in: ['super_admin', 'superadmin'] }
    });

    if (superAdminExists) {
      return res.status(403).json({
        success: false,
        message: 'A SuperAdmin is already registered. Registration is permanently closed.'
      });
    }

    // Generate 6-digit numeric OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Upsert OTP record
    await Otp.deleteMany({ email: cleanEmail });
    await Otp.create({
      email: cleanEmail,
      otp: otpCode,
      purpose: 'superadmin_registration',
      expiresAt
    });

    // Send OTP email
    await sendOtpEmail({
      email: cleanEmail,
      otp: otpCode,
      fullName: fullName || 'Super Administrator',
      purpose: 'Initial SuperAdmin Registration'
    });

    res.json({
      success: true,
      message: `Verification code sent to ${cleanEmail}`
    });
  } catch (error) {
    console.error('[Send OTP Error]:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP email' });
  }
};

// 3. Verify OTP & Create the Single SuperAdmin
exports.verifyOtpAndRegisterSuperAdmin = async (req, res) => {
  try {
    const { email, otp, password, fullName, phone } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanOtp = (otp || '').trim();

    if (!cleanEmail || !cleanOtp || !password || !fullName) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, password, and 6-digit OTP are required'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    // Ensure no existing SuperAdmin exists
    const superAdminExists = await User.findOne({
      role: { $in: ['super_admin', 'superadmin'] }
    });

    if (superAdminExists) {
      return res.status(403).json({
        success: false,
        message: 'A SuperAdmin is already registered. Only one SuperAdmin account is allowed.'
      });
    }

    // Verify OTP
    const otpRecord = await Otp.findOne({
      email: cleanEmail,
      otp: cleanOtp,
      expiresAt: { $gt: new Date() }
    });

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP code. Please request a new code.'
      });
    }

    // Delete used OTP
    await Otp.deleteMany({ email: cleanEmail });

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const participantId = 'TZR-SA' + Math.floor(1000 + Math.random() * 9000);

    // Create the ONE SuperAdmin User
    const superAdmin = await User.create({
      participantId,
      fullName: fullName.trim(),
      email: cleanEmail,
      phone: phone ? phone.trim() : '9790351878',
      password: hashedPassword,
      role: 'super_admin',
      designation: 'Chief Executive Administrator',
      district: 'Tirunelveli',
      status: 'active',
      permissions: ['*'],
      dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    });

    // Generate JWT Token
    const token = generateToken(superAdmin);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: superAdmin._id,
        fullName: superAdmin.fullName,
        email: superAdmin.email,
        phone: superAdmin.phone,
        role: superAdmin.role,
        designation: superAdmin.designation,
        dp: superAdmin.dp,
        permissions: superAdmin.permissions
      },
      message: 'Super Administrator registered and authenticated successfully'
    });
  } catch (error) {
    console.error('[Verify OTP & Register Error]:', error);
    res.status(500).json({ success: false, message: 'SuperAdmin registration failed: ' + error.message });
  }
};

// 4. Secure SuperAdmin / Admin Login (JWT Authenticated)
exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const loginIdentifier = (email || username || '').toLowerCase().trim();

    if (!loginIdentifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Find Admin User by Email or Participant ID
    const user = await User.findOne({
      $or: [{ email: loginIdentifier }, { participantId: loginIdentifier }]
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Access Denied: Invalid credentials or user not found'
      });
    }

    // Verify Role has portal access
    if (!['super_admin', 'superadmin', 'admin', 'judge', 'district_coordinator'].includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access Forbidden: This account does not have executive portal permissions'
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password. Please try again.'
      });
    }

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT
    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        dp: user.dp,
        designation: user.designation,
        permissions: user.permissions,
        district: user.district
      },
      message: 'Executive Administrator authenticated successfully'
    });
  } catch (error) {
    console.error('[Auth Login Error]:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error during login' });
  }
};

// 5. Send OTP for Passwordless Admin Login
exports.sendLoginOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();

    if (!cleanEmail) {
      return res.status(400).json({ success: false, message: 'Admin email is required' });
    }

    const user = await User.findOne({
      email: cleanEmail,
      role: { $in: ['super_admin', 'superadmin', 'admin'] }
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'No authorized administrator found with this email' });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await Otp.deleteMany({ email: cleanEmail });
    await Otp.create({
      email: cleanEmail,
      otp: otpCode,
      purpose: 'admin_login',
      expiresAt
    });

    await sendOtpEmail({
      email: cleanEmail,
      otp: otpCode,
      fullName: user.fullName,
      purpose: 'Executive Portal Login'
    });

    res.json({
      success: true,
      message: `Login OTP sent to ${cleanEmail}`
    });
  } catch (error) {
    console.error('[Send Login OTP Error]:', error);
    res.status(500).json({ success: false, message: 'Failed to send login OTP' });
  }
};

// 6. Verify Login OTP & Return JWT
exports.verifyLoginOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanOtp = (otp || '').trim();

    const otpRecord = await Otp.findOne({
      email: cleanEmail,
      otp: cleanOtp,
      expiresAt: { $gt: new Date() }
    });

    if (!otpRecord) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP code' });
    }

    await Otp.deleteMany({ email: cleanEmail });

    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: 'Administrator account not found' });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        dp: user.dp,
        designation: user.designation,
        permissions: user.permissions
      },
      message: 'Logged in successfully via OTP'
    });
  } catch (error) {
    console.error('[Verify Login OTP Error]:', error);
    res.status(500).json({ success: false, message: 'OTP Login verification failed' });
  }
};

// 7. Get Current User Profile (JWT Protected)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id || req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error('[Get Profile Error]:', error);
    res.status(500).json({ success: false, message: 'Could not fetch profile' });
  }
};

// 8. Update Profile (Dynamic DP upload, name, bio, etc.)
exports.updateProfile = async (req, res) => {
  try {
    const { fullName, phone, altPhone, address, district, dp, bio, designation, password } = req.body;
    const userId = req.user._id || req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (fullName) user.fullName = fullName.trim();
    if (phone !== undefined) user.phone = phone.trim();
    if (altPhone !== undefined) user.altPhone = altPhone;
    if (address !== undefined) user.address = address;
    if (district !== undefined) user.district = district;
    if (dp !== undefined) user.dp = dp;
    if (bio !== undefined) user.bio = bio;
    if (designation !== undefined) user.designation = designation;

    if (password && password.trim().length >= 6) {
      user.password = await bcrypt.hash(password.trim(), 10);
    }

    await user.save();

    res.json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        dp: user.dp,
        bio: user.bio,
        designation: user.designation,
        district: user.district
      },
      message: 'Profile updated successfully'
    });
  } catch (error) {
    console.error('[Update Profile Error]:', error);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

// 9. Get All Users (Super Admin Only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch users list' });
  }
};

// 10. Update User Role (Super Admin Only)
exports.updateUserRole = async (req, res) => {
  try {
    const { role, permissions, designation } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (role) user.role = role;
    if (permissions) user.permissions = permissions;
    if (designation) user.designation = designation;

    await user.save();

    res.json({
      success: true,
      user,
      message: `User role updated to '${user.role}' successfully`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update user role' });
  }
};
