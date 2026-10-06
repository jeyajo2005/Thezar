const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
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

// 1. User & Admin Login
exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const loginIdentifier = (email || username || '').toLowerCase().trim();

    if (!loginIdentifier || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email/username and password' });
    }

    // Default Super Admin Bootstrap
    if (
      (loginIdentifier === 'admin' || loginIdentifier === 'admin@thezarevents.com') &&
      password === 'admin123'
    ) {
      let superAdmin = await User.findOne({
        $or: [{ email: 'admin@thezarevents.com' }, { role: 'super_admin' }]
      });

      if (!superAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        superAdmin = await User.create({
          fullName: 'Suman / TheZar Administrator',
          email: 'admin@thezarevents.com',
          phone: '9790351878',
          role: 'super_admin',
          password: hashedPassword,
          designation: 'Super Administrator',
          dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          permissions: ['*']
        });
      }

      const token = generateToken(superAdmin);
      return res.json({
        success: true,
        token,
        user: {
          id: superAdmin._id,
          fullName: superAdmin.fullName,
          email: superAdmin.email,
          role: superAdmin.role,
          dp: superAdmin.dp,
          designation: superAdmin.designation,
          permissions: superAdmin.permissions
        },
        message: 'Super Administrator logged in successfully'
      });
    }

    // Find User by Email
    const user = await User.findOne({
      $or: [{ email: loginIdentifier }, { participantId: loginIdentifier }]
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials. User not found.' });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch && password !== user.password) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    // Update last login
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
        permissions: user.permissions,
        district: user.district
      },
      message: 'Logged in successfully'
    });
  } catch (error) {
    console.error('[Auth Login Error]:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error during login' });
  }
};

// 2. User Registration with Profile DP
exports.register = async (req, res) => {
  try {
    const { fullName, email, phone, password, role, dp, district } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const participantId = 'TZR-' + Math.floor(100000 + Math.random() * 900000);

    const newUser = await User.create({
      participantId,
      fullName,
      email: email.toLowerCase().trim(),
      phone: phone || '',
      password: hashedPassword,
      role: role || 'contestant',
      district: district || 'Tirunelveli',
      dp: dp || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    });

    const token = generateToken(newUser);
    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        dp: newUser.dp,
        district: newUser.district
      },
      message: 'Account created successfully'
    });
  } catch (error) {
    console.error('[Auth Register Error]:', error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
};

// 3. Google OAuth Login / Sync
exports.googleAuth = async (req, res) => {
  try {
    const { googleId, email, fullName, dp } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email from Google authentication is required' });
    }

    let user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      const participantId = 'TZR-G' + Math.floor(10000 + Math.random() * 90000);
      user = await User.create({
        participantId,
        googleId,
        fullName: fullName || 'Google User',
        email: email.toLowerCase().trim(),
        dp: dp || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        role: 'contestant',
        status: 'active'
      });
    } else {
      if (dp && (!user.dp || user.dp.includes('unsplash'))) {
        user.dp = dp;
      }
      if (googleId) user.googleId = googleId;
      user.lastLogin = new Date();
      await user.save();
    }

    const token = generateToken(user);
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        dp: user.dp,
        designation: user.designation,
        permissions: user.permissions
      },
      message: 'Google login successful'
    });
  } catch (error) {
    console.error('[Google Auth Error]:', error);
    res.status(500).json({ success: false, message: 'Google authentication failed' });
  }
};

// 4. Get Current User Profile (with live DP & Role)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id || req.user.id).select('-password');
    if (!user) {
      // Return req.user from token if bootstrap admin
      return res.json({ success: true, user: req.user });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error('[Get Profile Error]:', error);
    res.status(500).json({ success: false, message: 'Could not fetch profile' });
  }
};

// 5. Update Profile (Dynamic DP upload, name, bio, etc.)
exports.updateProfile = async (req, res) => {
  try {
    const { fullName, phone, altPhone, address, district, dp, bio, designation, password } = req.body;
    const userId = req.user._id || req.user.id;

    let user = await User.findById(userId);

    // If default bootstrap admin, create/find in DB
    if (!user) {
      user = await User.findOne({ email: req.user.email }) || new User({ email: req.user.email, role: 'super_admin' });
    }

    if (fullName) user.fullName = fullName;
    if (phone !== undefined) user.phone = phone;
    if (altPhone !== undefined) user.altPhone = altPhone;
    if (address !== undefined) user.address = address;
    if (district !== undefined) user.district = district;
    if (dp !== undefined) user.dp = dp; // Dynamic DP update!
    if (bio !== undefined) user.bio = bio;
    if (designation !== undefined) user.designation = designation;

    if (password && password.trim().length >= 6) {
      user.password = await bcrypt.hash(password, 10);
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

// 6. Get All Users (Super Admin Only for Role Management)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch users list' });
  }
};

// 7. Update User Role (Assign judge, district coordinator, admin)
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
