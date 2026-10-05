const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  scheduleId: { type: String, required: true, unique: true },
  eventId: { type: String, required: true },
  eventName: { type: String, required: true },
  competitionId: { type: String, default: '' },
  competitionName: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  venue: { type: String, required: true },
  stage: { type: String, default: 'Main Stage' },
  coordinator: { type: String, default: 'Event Team' },
  status: { type: String, enum: ['Scheduled', 'In Progress', 'Completed', 'Delayed'], default: 'Scheduled' }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);
