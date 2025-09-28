import React from "react";
import "./ShowroomsPage.css";

const showrooms = [
  {
    name: "Vahan Bazaar - Downtown",
    address: "123 Main Street, City",
    contact: "9876543210",
    hours: "10 AM - 8 PM",
  },
  {
    name: "Vahan Bazaar - Uptown",
    address: "456 Market Road, City",
    contact: "9123456780",
    hours: "10 AM - 8 PM",
  },
];

const ShowroomsPage = () => {
  return (
    <div className="showrooms-page">
      <h2>Our Showrooms</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0000000000005!2d90.0000000000000!3d23.0000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA5MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Showroom Map"
        ></iframe>
      </div>

      <div className="showroom-cards">
        {showrooms.map((store, index) => (
          <div className="card" key={index}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>Contact: {store.contact}</p>
            <p>Hours: {store.hours}</p>
            <button className="btn primary" onClick={() => window.open(`https://maps.google.com?q=${store.address}`, "_blank")}>
              View Location
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowroomsPage;
