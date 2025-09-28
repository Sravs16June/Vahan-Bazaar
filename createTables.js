const db = require("./database");

db.run(`
CREATE TABLE IF NOT EXISTS bikes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price TEXT,
  img TEXT,
  launchDate TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS usedbikes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price TEXT,
  mileage TEXT,
  seller TEXT,
  verified INTEGER,
  img TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS showrooms (
  id INTEGER PRIMARY KEY,
  name TEXT,
  address TEXT,
  contact TEXT,
  img TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT
)
`);

console.log("Tables created successfully!");
db.close();
