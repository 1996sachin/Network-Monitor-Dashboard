const Device = require('../models/device.model');

// Add a new device
exports.addDevice = async (req, res) => {
  try {
    const { name, ip, location, description, type } = req.body;

    if (!name || !ip || !type) {
      return res.status(400).json({ success: false, message: 'Name, IP and Type are required' });
    }

    const existing = await Device.findOne({ ip });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Device with this IP already exists' });
    }

    const device = new Device({ name, ip, location, description, type });
    await device.save();

    res.status(201).json({ success: true, message: 'Device added successfully', device });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// List all devices
exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find().sort({ createdAt: -1 });
    res.json({ success: true, devices });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
