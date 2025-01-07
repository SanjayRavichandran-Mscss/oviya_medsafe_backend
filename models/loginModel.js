const db = require('../config/db');

const getUserByUsername = async (username) => {
  const [rows] = await db.execute('SELECT * FROM login WHERE username = ?', [username]);
  return rows[0];
};

module.exports = {
  getUserByUsername
};
