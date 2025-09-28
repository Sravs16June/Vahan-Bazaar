import React, { useState } from "react";
import "./ComparisonPage.css";

const bikes = [
  { name: "Yamaha R15", price: "₹1,80,000", mileage: "40 km/l", power: "19 HP" },
  { name: "KTM Duke 200", price: "₹2,10,000", mileage: "35 km/l", power: "20 HP" },
  { name: "Royal Enfield Classic", price: "₹1,90,000", mileage: "35 km/l", power: "14 HP" },
];

const ComparisonPage = () => {
  const [bike1, setBike1] = useState(bikes[0].name);
  const [bike2, setBike2] = useState(bikes[1].name);

  const getBike = (name) => bikes.find(b => b.name === name);

  const b1 = getBike(bike1);
  const b2 = getBike(bike2);

  return (
    <div className="comparison-page">
      <h2>Compare Bikes</h2>
      <div className="compare-selectors">
        <select value={bike1} onChange={(e) => setBike1(e.target.value)}>
          {bikes.map(b => <option key={b.name}>{b.name}</option>)}
        </select>
        <select value={bike2} onChange={(e) => setBike2(e.target.value)}>
          {bikes.map(b => <option key={b.name}>{b.name}</option>)}
        </select>
      </div>

      <div className="comparison-table">
        <div className="row">
          <div>Price</div>
          <div className={b1.price !== b2.price ? "highlight" : ""}>{b1.price}</div>
          <div className={b1.price !== b2.price ? "highlight" : ""}>{b2.price}</div>
        </div>
        <div className="row">
          <div>Mileage</div>
          <div className={b1.mileage !== b2.mileage ? "highlight" : ""}>{b1.mileage}</div>
          <div className={b1.mileage !== b2.mileage ? "highlight" : ""}>{b2.mileage}</div>
        </div>
        <div className="row">
          <div>Power</div>
          <div className={b1.power !== b2.power ? "highlight" : ""}>{b1.power}</div>
          <div className={b1.power !== b2.power ? "highlight" : ""}>{b2.power}</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
