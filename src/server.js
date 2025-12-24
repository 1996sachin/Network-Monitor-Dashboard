require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const { startScheduler } = require('./services/scheduler.service');

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Network Monitor API running on port ${PORT}`);
  });

  startScheduler();
})();
