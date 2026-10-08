const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },
    otp: {
      type: String,
      required: true
    },
    purpose: {
      type: String,
      default: 'superadmin_registration'
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 } // MongoDB TTL index: auto-deletes expired OTPs
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Otp', otpSchema);
