const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    registrationId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, default: 'UPI_QR' }, // 'UPI_QR' | 'FREE'
    utrNumber: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending_verification', 'completed', 'free'],
      default: 'pending_verification'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
