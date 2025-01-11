const db = require('../config/db'); // Import the database connection pool

// Insert email into the database
exports.addSubscription = async (email) => {
  try {
    const query = 'INSERT INTO subscribe (email) VALUES (?)';
    const [result] = await db.execute(query, [email]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get all subscriptions
exports.getAllSubscriptions = async () => {
  try {
    const query = 'SELECT * FROM subscribe';
    const [rows] = await db.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Get subscription by ID
exports.getSubscriptionById = async (id) => {
  try {
    const query = 'SELECT * FROM subscribe WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};
