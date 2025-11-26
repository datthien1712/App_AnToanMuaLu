const { validationResult } = require('express-validator');
const Shelter = require('../models/Shelter');
const asyncHandler = require('../utils/asyncHandler');

exports.listShelters = asyncHandler(async (req, res) => {
  const shelters = await Shelter.find().sort({ name: 1 });
  res.json({ success: true, data: shelters });
});

exports.createShelter = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const shelter = await Shelter.create(req.body);
  res.status(201).json({ success: true, data: shelter });
});

exports.updateShelter = asyncHandler(async (req, res) => {
  const shelter = await Shelter.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!shelter) {
    return res.status(404).json({ success: false, message: 'Shelter not found' });
  }
  res.json({ success: true, data: shelter });
});


