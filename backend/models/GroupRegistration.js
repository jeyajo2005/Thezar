const mongoose = require('mongoose');

const groupRegistrationSchema = new mongoose.Schema(
  {
    registrationId: { type: String, required: true, unique: true },
    groupName: { type: String, required: true },
    groupAddress: { type: String, required: true },
    leaderName: { type: String, required: true },
    leaderAddress: { type: String, required: true },
    leaderPhone: { type: String, required: true },
    leaderAltPhone: { type: String, default: '' },
    leaderEmail: { type: String, required: true },
    members: [{ name: { type: String, required: true } }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('GroupRegistration', groupRegistrationSchema);
