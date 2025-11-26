const { validationResult } = require('express-validator');
const Alert = require('../models/Alert');
const asyncHandler = require('../utils/asyncHandler');

exports.listAlerts = asyncHandler(async (req, res) => {
  const { region } = req.query;
  const filters = region ? { region } : {};
  const alerts = await Alert.find(filters).sort({ createdAt: -1 });
  res.json({ success: true, data: alerts });
});

exports.createAlert = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const alert = await Alert.create(req.body);
  res.status(201).json({ success: true, data: alert });
});

exports.getAlert = asyncHandler(async (req, res) => {
  const alert = await Alert.findById(req.params.id);
  if (!alert) {
    return res.status(404).json({ success: false, message: 'Alert not found' });
  }
  res.json({ success: true, data: alert });
});

exports.deleteAlert = asyncHandler(async (req, res) => {
  const alert = await Alert.findByIdAndDelete(req.params.id);
  if (!alert) {
    return res.status(404).json({ success: false, message: 'Alert not found' });
  }
  res.status(204).send();
});


