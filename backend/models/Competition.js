const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  competitionId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  eventId: { type: String, required: true },
  eventName: { type: String, default: '' },
  category: { type: String, default: 'General' },
  type: { type: String, enum: ['Individual', 'Group'], default: 'Individual' },
  minGroupSize: { type: Number, default: 1 },
  maxGroupSize: { type: Number, default: 1 },
  maxParticipants: { type: Number, default: 100 },
  currentParticipants: { type: Number, default: 0 },
  fee: { type: Number, default: 0 },
  rules: { type: [String], default: [] },
  duration: { type: String, default: '15 mins' },
  venue: { type: String, default: 'Main Stage' },
  status: { type: String, enum: ['Draft', 'Active', 'Completed', 'Cancelled'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Competition', competitionSchema);
