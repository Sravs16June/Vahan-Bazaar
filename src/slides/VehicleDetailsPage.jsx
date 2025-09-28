import React, { useState } from "react";
import { useParams } from "react-router-dom";
import vehicles from "../data/vehicles";
import "./VehicleDetailsPage.css";

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(id));
  const [currentImg, setCurrentImg] = useState(0);

  if (!vehicle) return <p>Vehicle not found</p>;

  return (
    <div className="vehicle-details">
      <h1>{vehicle.brand} {vehicle.model}</h1>
      <div className="carousel">
        <button onClick={() => setCurrentImg((currentImg-1+vehicle.images.length)%vehicle.images.length)}>◀</button>
        <img src={vehicle.images[currentImg]} alt={vehicle.model} />
        <button onClick={() => setCurrentImg((currentImg+1)%vehicle.images.length)}>▶</button>
      </div>
      <p>Price: ₹{vehicle.price.toLocaleString()}</p>
      <p>Fuel: {vehicle.fuelType}</p>
      <h3>Specs:</h3>
      <ul>
        {Object.entries(vehicle.specs).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
      </ul>
      <button className="book-btn">Book Test Ride</button>
    </div>
  );
};

export default VehicleDetailsPage;
