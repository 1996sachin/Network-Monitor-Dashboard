// src/services/scheduler.service.js
const monitor = require('./monitor.service');

function startScheduler() {
  setInterval(monitor, 60000); // run monitor every 60 seconds
  console.log("Scheduler started");
}

module.exports = { startScheduler };
