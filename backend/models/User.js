const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    participantId: { type: String, unique: true, sparse: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, default: '' },
    altPhone: { type: String, default: '' },
    address: { type: String, default: '' },
    district: { type: String, default: 'Tirunelveli' },
    password: { type: String },
    
    // Dynamic Role-Based Access Control
    role: {
      type: String,
      enum: ['super_admin', 'admin', 'judge', 'district_coordinator', 'contestant'],
      default: 'contestant'
    },
    
    // Profile Picture (DP) - URL or Base64 Image String
    dp: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    
    // Additional Profile Attributes
    bio: { type: String, default: '' },
    designation: { type: String, default: 'Executive Member' },
    googleId: { type: String, default: null },
    ethAddress: { type: String, default: null },
    status: { type: String, enum: ['active', 'suspended', 'pending'], default: 'active' },
    permissions: [{ type: String }],
    lastLogin: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
