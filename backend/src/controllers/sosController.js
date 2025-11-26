const { validationResult } = require('express-validator');
const SOSRequest = require('../models/SOSRequest');
const asyncHandler = require('../utils/asyncHandler');

exports.listSOSRequests = asyncHandler(async (req, res) => {
  const requests = await SOSRequest.find().sort({ createdAt: -1 });
  res.json({ success: true, data: requests });
});

exports.createSOSRequest = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const sosRequest = await SOSRequest.create(req.body);
  res.status(201).json({ success: true, data: sosRequest });
});

exports.updateSOSStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const request = await SOSRequest.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );
  if (!request) {
    return res.status(404).json({ success: false, message: 'SOS request not found' });
  }
  res.json({ success: true, data: request });
});


