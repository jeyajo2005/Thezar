const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  district: { type: String, default: 'Tirunelveli' },
  eventCategory: { type: String, default: 'General Enquiry' },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'contacted', 'resolved'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
