const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Create / connect SQLite DB
const db = new sqlite3.Database('./portfolio.db');

// Create table
 db.run(`CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT
)`);

// API route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const sql = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;

  db.run(sql, [name, email, message], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, id: this.lastID });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
