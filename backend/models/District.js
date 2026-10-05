const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  districtId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  zone: { type: String, default: 'South' },
  coordinatorName: { type: String, default: 'TBD' },
  coordinatorPhone: { type: String, default: '' },
  coordinatorEmail: { type: String, default: '' },
  activeEventsCount: { type: Number, default: 0 },
  participantsCount: { type: Number, default: 0 },
  registrationsCount: { type: Number, default: 0 },
  status: { type: String, enum: ['Active', 'Upcoming', 'Inactive'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('District', districtSchema);
