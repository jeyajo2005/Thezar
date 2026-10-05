const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    registrationId: { type: String, required: true, unique: true },
    participantId: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    registrationType: { type: String, enum: ['individual', 'group'], required: true },
    selectedEventIds: [{ type: String }],
    selectedEvents: [
      {
        eventId: String,
        title: String,
        price: Number
      }
    ],
    howDidYouHear: { type: String, default: 'Website' },
    totalAmount: { type: Number, default: 0 },
    paymentStatus: { type: String, default: 'pending_verification' },
    utrNumber: { type: String, default: '' },
    qrCodeData: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registration', registrationSchema);
