import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Vahan Bazaar</h1>
          <p>Your One-Stop Destination for Bikes</p>
          <div className="hero-buttons">
            <Link to="/buy" className="btn primary">Explore Bikes</Link>
            <Link to="/sell" className="btn secondary">Sell Your Bike</Link>
          </div>
        </div>
      </section>

      <section className="section trending">
        <h2>Trending Bikes</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://cdn.bikedekho.com/processedimages/yamaha/r15-v4/source/r15-v465f479fcabc10.jpg" alt="Bike 1" />
            <h3>Yamaha R15</h3>
            <p>₹1,80,000</p>
          </div>
          <div className="card">
            <img src="https://cdn.bikedekho.com/processedimages/ktm/2023-200-duke/source/2023-200-duke6710a8cadf221.jpg" alt="Bike 2" />
            <h3>KTM Duke 200</h3>
            <p>₹2,10,000</p>
          </div>
          <div className="card">
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/183389/classic-350-right-front-three-quarter-4.jpeg?isig=0&q=80" alt="Bike 3" />
            <h3>Royal Enfield Classic</h3>
            <p>₹1,90,000</p>
          </div>
        </div>
      </section>

      <section className="section upcoming">
        <h2>Upcoming Launches</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://imgd.aeplcdn.com/1280x720/n/kpv5nfb_1825019.jpg" alt="Upcoming 1" />
            <h3>Honda CB350</h3>
            <span className="badge">Coming Soon</span>
          </div>
          <div className="card">
            <img src="https://cdn.bikedekho.com/processedimages/bajaj/pulsar-n250/source/pulsar-n250661677e50783d.jpg?imwidth=412&impolicy=resize" alt="Upcoming 2" />
            <h3>Bajaj Pulsar 250</h3>
            <span className="badge">Coming Soon</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
