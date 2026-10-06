const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'thezar_super_secure_jwt_secret_2026';

// Middleware to verify JWT Token or Legacy Admin Token
exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7).trim();
    } else {
      token = req.headers['x-admin-token'] || req.headers['x-auth-token'];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Access Denied: No authentication token provided' });
    }

    // Check JWT
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');
      if (user) {
        req.user = user;
        return next();
      }
    } catch (jwtErr) {
      // If legacy hardcoded token for bootstrap
      if (token === 'tzr_admin_super_secret_token_2026') {
        req.user = {
          _id: 'default_admin_id',
          fullName: 'Suman (Super Administrator)',
          email: 'admin@thezarevents.com',
          role: 'super_admin',
          dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          permissions: ['*']
        };
        return next();
      }
      return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }

    return res.status(401).json({ success: false, message: 'User not found for this token' });
  } catch (error) {
    console.error('[Auth Middleware Error]:', error);
    return res.status(500).json({ success: false, message: 'Internal Authentication Error' });
  }
};

// Middleware for Role-Based Access Control
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Super Admin has access to all routes
    if (req.user.role === 'super_admin' || req.user.role === 'superadmin') {
      return next();
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Forbidden: Role '${req.user.role}' is not authorized to access this resource`
      });
    }

    next();
  };
};

exports.JWT_SECRET = JWT_SECRET;
