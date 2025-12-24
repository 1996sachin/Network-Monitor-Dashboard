// src/services/monitor.service.js
const Device = require('../models/device.model');
const ping = require('ping');

const MAX_HISTORY = 20;

async function monitor() {
  try {
    const devices = await Device.find();

    for (const device of devices) {
      const res = await ping.promise.probe(device.ip, { timeout: 2 });
      const status = res.alive ? 'up' : 'down';

      // Update history
      device.history = device.history || [];
      device.history.push(status);
      if (device.history.length > MAX_HISTORY) {
        device.history.shift();
      }

      // Calculate uptime %
      const upCount = device.history.filter(s => s === 'up').length;
      device.uptime = Math.round((upCount / device.history.length) * 100);

      // Update current status and last seen
      device.status = status;
      device.lastSeen = new Date();

      await device.save();
    }

    console.log(`✅ Devices monitored at ${new Date().toLocaleTimeString()}`);
  } catch (err) {
    console.error('Error monitoring devices:', err);
  }
}

module.exports = monitor;
