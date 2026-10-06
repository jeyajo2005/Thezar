const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    participantId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    altPhone: { type: String, default: '' },
    address: { type: String, required: true },
    district: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
