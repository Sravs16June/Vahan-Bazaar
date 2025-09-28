import React from "react";
import "./UsedBikesPage.css";

const usedBikes = [
  { name: "Honda CB Shine", price: "₹50,000", mileage: "55 km/l", seller: "Ravi", verified: true, img: "https://4.imimg.com/data4/CK/HN/GLADMIN-18847408/6-500x500.png" },
  { name: "Bajaj Pulsar 150", price: "₹65,000", mileage: "50 km/l", seller: "Amit", verified: false, img: "https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/pulsar-150-2024/360-degree/single-disc/red/00.png" },
  { name: "Hero Splendor", price: "₹40,000", mileage: "60 km/l", seller: "Sneha", verified: true, img: "https://5.imimg.com/data5/HR/EU/GLADMIN-66548982/hero-splendor-plus-bike-500x500.png" },
];

const UsedBikesPage = () => {
  return (
    <div className="used-page">
      <h2>Used Bikes</h2>
      <div className="used-cards">
        {usedBikes.map((bike, index) => (
          <div className="card" key={index}>
            <img src={bike.img} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>Price: {bike.price}</p>
            <p>Mileage: {bike.mileage}</p>
            <p>Seller: {bike.seller}</p>
            <span className={`badge ${bike.verified ? "verified" : "non-verified"}`}>
              {bike.verified ? "Verified" : "Non-Verified"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsedBikesPage;
