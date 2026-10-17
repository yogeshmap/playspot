const express = require('express');
const router = express.Router();
const Turf = require('../models/Turf');

router.post('/add', async (req, res) => {
  try {
    const t = new Turf(req.body);
    await t.save();
    res.json(t);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

router.get('/', async (req, res) => {
  try {
    const list = await Turf.find().limit(100);
    res.json(list);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

module.exports = router;
