import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Vahan Bazaar</h1>
          <p>Your One-Stop Destination for Bikes</p>
          <div className="hero-buttons">
            {/* Main actions */}
            <Link to="/buy" className="btn primary">Explore Bikes</Link>
            <Link to="/sell" className="btn secondary">Sell Your Bike</Link>

            {/* Auth actions */}
            <Link to="/login" className="btn auth">Login</Link>
            <Link to="/signup" className="btn auth secondary-auth">Sign Up</Link>
          </div>
        </div>
      </section>

      {/* Trending Bikes Section */}
      <section className="section trending">
        <h2>Trending Bikes</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/bike1.jpg" alt="Bike 1" />
            <h3>Yamaha R15</h3>
            <p>₹1,80,000</p>
          </div>
          <div className="card">
            <img src="/images/bike2.jpg" alt="Bike 2" />
            <h3>KTM Duke 200</h3>
            <p>₹2,10,000</p>
          </div>
          <div className="card">
            <img src="/images/bike3.jpg" alt="Bike 3" />
            <h3>Royal Enfield Classic</h3>
            <p>₹1,90,000</p>
          </div>
        </div>
      </section>

      {/* Upcoming Launches Section */}
      <section className="section upcoming">
        <h2>Upcoming Launches</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/bike4.jpg" alt="Upcoming 1" />
            <h3>Honda CB350</h3>
            <span className="badge">Coming Soon</span>
          </div>
          <div className="card">
            <img src="/images/bike5.jpg" alt="Upcoming 2" />
            <h3>Bajaj Pulsar 250</h3>
            <span className="badge">Coming Soon</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
