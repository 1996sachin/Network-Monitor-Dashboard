const pool = require('../config/db');

exports.stats = async (req, res) => {
  const [[total]] = await pool.query(
    'SELECT COUNT(*) total FROM devices WHERE organization_id=?',
    [req.orgId]
  );

  const [[up]] = await pool.query(
    "SELECT COUNT(*) up FROM devices WHERE status='UP' AND organization_id=?",
    [req.orgId]
  );

  res.json({
    total: total.total,
    up: up.up,
    down: total.total - up.up
  });
};
