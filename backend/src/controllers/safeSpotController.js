const { validationResult } = require('express-validator');
const SafeSpot = require('../models/SafeSpot');
const asyncHandler = require('../utils/asyncHandler');

exports.listSafeSpots = asyncHandler(async (req, res) => {
  const spots = await SafeSpot.find().sort({ createdAt: -1 });
  res.json({ success: true, data: spots });
});

exports.createSafeSpot = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const spot = await SafeSpot.create(req.body);
  res.status(201).json({ success: true, data: spot });
});

exports.getSafeSpot = asyncHandler(async (req, res) => {
  const spot = await SafeSpot.findById(req.params.id);
  if (!spot) {
    return res.status(404).json({ success: false, message: 'Safe spot not found' });
  }
  res.json({ success: true, data: spot });
});

exports.updateSafeSpot = asyncHandler(async (req, res) => {
  const spot = await SafeSpot.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!spot) {
    return res.status(404).json({ success: false, message: 'Safe spot not found' });
  }
  res.json({ success: true, data: spot });
});

exports.deleteSafeSpot = asyncHandler(async (req, res) => {
  const spot = await SafeSpot.findByIdAndDelete(req.params.id);
  if (!spot) {
    return res.status(404).json({ success: false, message: 'Safe spot not found' });
  }
  res.status(204).send();
});


