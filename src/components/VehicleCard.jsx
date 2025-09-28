import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./VehicleCard.css";

const VehicleCard = ({ vehicle }) => {
  const { user, addFavorite, removeFavorite } = useContext(UserContext);
  const isFavorite = user.favorites.includes(vehicle.id);

  return (
    <div className="vehicle-card">
      <img src={vehicle.images[0]} alt={vehicle.model} className="vehicle-img" />
      <h3>{vehicle.brand} {vehicle.model}</h3>
      <p>Price: ₹{vehicle.price.toLocaleString()}</p>
      <p>Fuel: {vehicle.fuelType}</p>
      <Link to={`/vehicle/${vehicle.id}`} className="details-btn">View Details</Link>
    </div>
  );
};

export default VehicleCard;
