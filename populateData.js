const db = require("./database");

db.run(`CREATE TABLE IF NOT EXISTS bikes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price TEXT,
  img TEXT,
  launchDate TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS usedbikes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price TEXT,
  mileage TEXT,
  seller TEXT,
  verified INTEGER,
  img TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS showrooms (
  id INTEGER PRIMARY KEY,
  name TEXT,
  address TEXT,
  contact TEXT,
  img TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT
)`);

const bikesData = [
  { name: "Bajaj Pulsar 150", price: "65000", img: "https://cdn.bajajauto.com/.../pulsar150.png", launchDate: null },
  { name: "Honda CB350", price: "180000", img: "https://4.imimg.com/.../cb350.png", launchDate: "2025-12-15" }
];

const usedBikesData = [
  { name: "Honda CB Shine", price: "50000", mileage: "55 km/l", seller: "Ravi", verified: 1, img: "https://4.imimg.com/.../shine.png" },
  { name: "Bajaj Pulsar 150", price: "65000", mileage: "50 km/l", seller: "Amit", verified: 0, img: "https://cdn.bajajauto.com/.../pulsar150.png" }
];

const showroomsData = [
  { name: "Speed Motors", address: "MG Road, Bangalore", contact: "9876543210", img: "https://via.placeholder.com/150" }
];

bikesData.forEach(bike => {
  db.run("INSERT INTO bikes (name, price, img, launchDate) VALUES (?, ?, ?, ?)", [bike.name, bike.price, bike.img, bike.launchDate]);
});

usedBikesData.forEach(bike => {
  db.run("INSERT INTO usedbikes (name, price, mileage, seller, verified, img) VALUES (?, ?, ?, ?, ?, ?)", [bike.name, bike.price, bike.mileage, bike.seller, bike.verified, bike.img]);
});

showroomsData.forEach(showroom => {
  db.run("INSERT INTO showrooms (name, address, contact, img) VALUES (?, ?, ?, ?)", [showroom.name, showroom.address, showroom.contact, showroom.img]);
});

console.log("Mock data populated successfully!");
