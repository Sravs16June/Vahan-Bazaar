import React, { useState } from "react";

const SearchAndFilters = ({ vehicles, setFilteredVehicles }) => {
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");

  const handleFilter = () => {
    let filtered = vehicles;
    if (brand) filtered = filtered.filter(v => v.brand.toLowerCase().includes(brand.toLowerCase()));
    if (fuel) filtered = filtered.filter(v => v.fuelType.toLowerCase() === fuel.toLowerCase());
    setFilteredVehicles(filtered);
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <input placeholder="Brand" value={brand} onChange={e => setBrand(e.target.value)} />
      <select value={fuel} onChange={e => setFuel(e.target.value)}>
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Electric">Electric</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default SearchAndFilters;
