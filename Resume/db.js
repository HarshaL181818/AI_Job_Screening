// === db.js ===
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.resolve(__dirname, "database.sqlite"), (err) => {
  if (err) console.error("Error opening database", err);
  else console.log("Connected to SQLite database");
});

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS job_descriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      raw_text TEXT,
      parsed_json TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
