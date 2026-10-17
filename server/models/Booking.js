const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  turfId: { type: mongoose.Schema.Types.ObjectId, ref: 'Turf' },
  bookingDate: String,
  startTime: String,
  endTime: String,
  totalAmount: Number,
  status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' },
  paymentStatus: { type: String, enum: ['unpaid','paid'], default: 'unpaid' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
