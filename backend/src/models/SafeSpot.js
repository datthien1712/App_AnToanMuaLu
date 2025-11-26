const { Schema, model } = require('mongoose');

const safeSpotSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    address: { type: String, trim: true },
    status: {
      type: String,
      enum: ['safe', 'crowded', 'closed'],
      default: 'safe',
    },
    tags: [{ type: String, trim: true }],
    location: {
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
    createdBy: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = model('SafeSpot', safeSpotSchema);


