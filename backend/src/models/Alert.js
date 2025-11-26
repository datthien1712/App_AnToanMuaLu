const { Schema, model } = require('mongoose');

const alertSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    region: { type: String, required: true, trim: true },
    severity: {
      type: String,
      enum: ['info', 'warning', 'danger'],
      default: 'info',
    },
    message: { type: String, required: true },
    source: { type: String, trim: true },
    expiresAt: { type: Date },
    data: Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = model('Alert', alertSchema);


