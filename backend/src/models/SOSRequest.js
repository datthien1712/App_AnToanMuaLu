const { Schema, model } = require('mongoose');

const sosRequestSchema = new Schema(
  {
    requesterName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, trim: true },
    notes: { type: String },
    status: {
      type: String,
      enum: ['pending', 'acknowledged', 'rescued', 'cancelled'],
      default: 'pending',
    },
    lastKnownLocation: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere',
      },
    },
    sharedWith: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

module.exports = model('SOSRequest', sosRequestSchema);


