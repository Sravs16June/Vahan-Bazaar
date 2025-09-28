import React from "react";
import "./UpcomingLaunchesPage.css";

const upcomingBikes = [
  {
    name: "TVS Apache RTR 200",
    launchDate: "2025-12-15",
    img: "https://5.imimg.com/data5/ANDROID/Default/2021/6/IC/FJ/SC/26146669/tvs-apache-rtr-200-4v-race-edition-2-0-standard-black-86695524-ijpr6-png-500x500.png"
  },
  {
    name: "KTM RC 390",
    launchDate: "2025-11-20",
    img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/125091/rc-390-right-front-three-quarter-3.png?isig=0"
  }
];

const UpcomingPage = () => {
  const calculateCountdown = (date) => {
    const diff = new Date(date) - new Date();
    const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
    return days;
  };

  return (
    <div className="upcoming-page">
      <h2>Upcoming Launches</h2>
      <div className="upcoming-cards">
        {upcomingBikes.map((bike, index) => (
          <div className="card" key={index}>
            <img src={bike.img} alt={bike.name} />
            <h3>{bike.name}</h3>
            <span className="badge">Coming Soon</span>
            <p>Launch in {calculateCountdown(bike.launchDate)} days</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
