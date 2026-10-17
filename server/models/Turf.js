const mongoose = require('mongoose');

const TurfSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  turfName: String,
  sportType: String,
  location: String,
  pricePerHour: Number,
  workingHours: { start: String, end: String },
  imageUrl: String,
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Turf', TurfSchema);
