const { Schema, model } = require('mongoose');

const shelterSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    district: { type: String, trim: true },
    province: { type: String, trim: true },
    capacity: { type: Number, default: 0 },
    currentOccupancy: { type: Number, default: 0 },
    contactName: { type: String, trim: true },
    contactPhone: { type: String, trim: true },
    facilities: [{ type: String }],
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        required: false,
        index: '2dsphere',
      },
    },
  },
  { timestamps: true }
);

module.exports = model('Shelter', shelterSchema);


