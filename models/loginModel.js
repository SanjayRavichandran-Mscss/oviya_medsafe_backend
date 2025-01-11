const db = require('../config/db');

// Fetch user by email
const getUserByUsername = async (email) => {
  try {
    const [rows] = await db.execute('SELECT * FROM login WHERE username = ?', [email]);
    return rows[0];
  } catch (error) {
    throw new Error('Error fetching user: ' + error.message);
  }
};

// Update password
const updatePassword = async (email, newPassword) => {
  try {
    const query = 'UPDATE login SET password = ? WHERE username = ?';
    await db.execute(query, [newPassword, email]);
  } catch (error) {
    throw new Error('Error updating password: ' + error.message);
  }
};

module.exports = { getUserByUsername, updatePassword };
