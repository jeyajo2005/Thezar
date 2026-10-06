const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  resultId: { type: String, required: true, unique: true },
  eventId: { type: String, required: true },
  eventName: { type: String, required: true },
  competitionId: { type: String, required: true },
  competitionName: { type: String, required: true },
  participantId: { type: String, required: true },
  participantName: { type: String, required: true },
  district: { type: String, default: 'Tirunelveli' },
  rank: { type: Number, required: true }, // 1, 2, 3
  score: { type: Number, default: 0 },
  position: { type: String, default: '1st Place' }, // 1st Place, 2nd Place, 3rd Place, Finalist
  prize: { type: String, default: 'Trophy + Certificate' },
  points: { type: Number, default: 100 },
  published: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
