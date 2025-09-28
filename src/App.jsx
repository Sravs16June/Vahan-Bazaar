import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./slides/HomePage";
import VehicleDetailsPage from "./slides/VehicleDetailsPage";
import ComparePage from "./slides/ComparisonPage";
import CalculatorsPage from "./slides/CalculatorsPage";
import UsedBikesPage from "./slides/UsedBikesPage";
import ShowroomsPage from "./slides/ShowroomsPage";
import UpcomingLaunches from "./slides/UpcomingLaunchesPage";
import { UserProvider } from "./context/UserContext";
import BuyPage from "./slides/BuyPage";
import SellPage from "./slides/SellPage";
import AboutPage from "./slides/AboutPage";
import ContactPage from "./slides/ContactPage";
import LoginPage from "./slides/LoginPage";
import SignupPage from "./slides/Si8gnupPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicle/:id" element={<VehicleDetailsPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/used-bikes" element={<UsedBikesPage />} />
          <Route path="/showrooms" element={<ShowroomsPage />} />
          <Route path="/upcoming-launches" element={<UpcomingLaunches />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
