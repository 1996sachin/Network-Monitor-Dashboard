// src/models/device.model.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ip: { type: String, required: true },
  type: { type: String },
  location: { type: String },
  description: { type: String },
  status: { type: String, default: 'down' },  // up or down
  uptime: { type: Number, default: 0 },       // % uptime
  history: { type: Array, default: [] },      // recent status history
  lastSeen: { type: Date, default: Date.now } // last pinged time
});

module.exports = mongoose.model('Device', deviceSchema);
