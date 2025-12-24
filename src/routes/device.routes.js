// src/routes/device.routes.js
const express = require('express');
const router = express.Router();
const Device = require('../models/device.model');
const monitor = require('../services/monitor.service'); // import monitor

// Get all devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new device
router.post('/', async (req, res) => {
  const { name, ip, type, location, description } = req.body;
  const device = new Device({ 
    name, 
    ip, 
    type, 
    location, 
    description, 
    status: 'up',       // assume UP initially
    lastSeen: new Date(),
    uptime: 100,
    history: ['up']     // initialize history
  });

  try {
    const newDevice = await device.save();

    // Immediately check status after adding
    await monitor();

    res.status(201).json(newDevice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get device history
router.get('/:id/history', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: 'Device not found' });

    // Return history as array of { time, status }
    const history = device.history.map((status, index) => ({
      time: Date.now() - (device.history.length - 1 - index) * 60000,
      status
    }));
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
