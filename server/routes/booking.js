const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

function timesOverlap(aStart, aEnd, bStart, bEnd) {
  return (aStart < bEnd) && (bStart < aEnd);
}

router.post('/create', async (req, res) => {
  try {
    const { userId, turfId, bookingDate, startTime, endTime, totalAmount } = req.body;
    const existing = await Booking.find({ turfId, bookingDate, status: { $in: ['pending','confirmed'] } });
    for (let b of existing) {
      if (timesOverlap(startTime, endTime, b.startTime, b.endTime)) {
        return res.status(400).json({ msg: 'Slot already booked' });
      }
    }

    const booking = new Booking({
      userId,
      turfId,
      bookingDate,
      startTime,
      endTime,
      totalAmount,
      status: 'confirmed',
      paymentStatus: 'unpaid'
    });

    await booking.save();
    res.json(booking);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

router.get('/my/:userId', async (req, res) => {
  try {
    const list = await Booking.find({ userId: req.params.userId }).populate('turfId');
    res.json(list);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

module.exports = router;
