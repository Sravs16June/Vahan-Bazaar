import React from "react";
import VehicleCard from "./VehicleCard";
import "./VehicleList.css";

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vehicle-list">
      {vehicles.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
    </div>
  );
};

export default VehicleList;
