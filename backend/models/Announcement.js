const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  announcementId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  targetAudience: { type: String, enum: ['All Participants', 'Specific District', 'Specific Event'], default: 'All Participants' },
  district: { type: String, default: 'All' },
  eventId: { type: String, default: 'All' },
  publishDate: { type: String, default: new Date().toISOString().slice(0, 10) },
  status: { type: String, enum: ['Active', 'Draft', 'Archived'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Announcement', announcementSchema);
