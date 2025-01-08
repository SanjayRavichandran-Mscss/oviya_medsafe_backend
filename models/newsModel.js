const db = require('../config/db'); // Assuming you're using MySQL or similar

// Get all news
exports.getAllNews = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM news", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// Get news by ID
exports.getNewsById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM news WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

// Create new news
exports.createNews = ({ category_id, news_title, news_short_title, date, image, news_content }) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO news (category_id, news_title, news_short_title, date, image, news_content) VALUES (?, ?, ?, ?, ?, ?)",
      [category_id, news_title, news_short_title, date, image, news_content],
      (err, results) => {
        if (err) reject(err);
        else resolve(results.insertId); // Return the ID of the newly inserted news
      }
    );
  });
};

// Update news by ID
exports.updateNews = (id, { category_id, news_title, news_short_title, date, image, news_content }) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE news SET category_id = ?, news_title = ?, news_short_title = ?, date = ?, image = ?, news_content = ? WHERE id = ?",
      [category_id, news_title, news_short_title, date, image, news_content, id],
      (err, results) => {
        if (err) reject(err);
        else resolve(results.affectedRows); // Return the number of affected rows
      }
    );
  });
};

// Delete news by ID
exports.deleteNews = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM news WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      else resolve(results.affectedRows); // Return the number of affected rows
    });
  });
};
