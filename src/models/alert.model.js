const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
  {
    deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
    type: String,
    message: String,
    severity: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Alert', AlertSchema);
