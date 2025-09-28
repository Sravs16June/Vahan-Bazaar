import React, { useState } from "react";
import "./BuyPage.css";

const bikesData = [
  { id: 1, name: "Yamaha R15", price: "₹1,80,000", fuel: "Petrol", img: "https://cdn.bikedekho.com/processedimages/yamaha/r15-v4/source/r15-v465f479fcabc10.jpg" },
  { id: 2, name: "KTM Duke 200", price: "₹2,10,000", fuel: "Petrol", img: "https://cdn.bikedekho.com/processedimages/ktm/2023-200-duke/source/2023-200-duke6710a8cadf221.jpg" },
  { id: 3, name: "Royal Enfield Classic", price: "₹1,90,000", fuel: "Petrol", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/183389/classic-350-right-front-three-quarter-4.jpeg?isig=0&q=80" },
  { id: 4, name: "Honda CB350", price: "₹2,00,000", fuel: "Petrol", img: "https://imgd.aeplcdn.com/1280x720/n/kpv5nfb_1825019.jpg" },
  { id: 5, name: "Bajaj Pulsar 250", price: "₹1,75,000", fuel: "Petrol", img: "https://cdn.bikedekho.com/processedimages/bajaj/pulsar-n250/source/pulsar-n250661677e50783d.jpg?imwidth=412&impolicy=resize" },
];

const BuyPage = () => {
  const [filter, setFilter] = useState("");

  const filteredBikes = bikesData.filter(
    (bike) => bike.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="buy-page">
      <section className="filter-section">
        <input
          type="text"
          placeholder="Search bikes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </section>

      <section className="bikes-section">
        <div className="card-container">
          {filteredBikes.map((bike) => (
            <div className="card" key={bike.id}>
              <img src={bike.img} alt={bike.name} />
              <h3>{bike.name}</h3>
              <p>{bike.price}</p>
              <p>{bike.fuel}</p>
              <button className="btn primary">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyPage;
