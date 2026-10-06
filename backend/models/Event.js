const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    eventId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, default: 'General' },
    district: { type: String, default: 'Tirunelveli' },
    date: { type: String, default: '2026-12-12' },
    price: { type: Number, default: 0 },
    venue: { type: String, default: 'Tirunelveli District Arena' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
