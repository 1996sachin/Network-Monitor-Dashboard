const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwt');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const [[user]] = await pool.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );

  if (!user) return res.sendStatus(401);

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.sendStatus(401);

  const token = jwt.sign(user, secret, { expiresIn });
  res.json({ token });
};
