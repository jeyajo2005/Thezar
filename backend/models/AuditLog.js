const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  logId: { type: String, required: true, unique: true },
  adminName: { type: String, default: 'Admin' },
  action: { type: String, required: true },
  module: { type: String, required: true },
  recordId: { type: String, default: '' },
  details: { type: String, default: '' },
  ip: { type: String, default: '127.0.0.1' },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('AuditLog', auditLogSchema);
