import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Vahan Bazaar</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/calculators">Calculators</Link>
        <Link to="/used-bikes">Used Bikes</Link>
        <Link to="/showrooms">Showrooms</Link>
        <Link to="/upcoming-launches">Upcoming Launches</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
