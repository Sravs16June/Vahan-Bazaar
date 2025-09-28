const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/bikes", (req, res) => {
  db.all("SELECT * FROM bikes", [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ success: true, data: rows });
  });
});

app.get("/api/usedbikes", (req, res) => {
  db.all("SELECT * FROM usedbikes", [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ success: true, data: rows });
  });
});

app.get("/api/upcoming", (req, res) => {
  db.all("SELECT * FROM bikes WHERE launchDate IS NOT NULL", [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ success: true, data: rows });
  });
});

app.get("/api/showrooms", (req, res) => {
  db.all("SELECT * FROM showrooms", [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ success: true, data: rows });
  });
});

app.post("/api/contacts", (req, res) => {
  const { name, email, message } = req.body;
  db.run(
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    function (err) {
      if (err) res.status(500).json({ error: err.message });
      else res.json({ success: true, id: this.lastID, name, email, message });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
