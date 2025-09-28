import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0000000000005!2d90.0000000000000!3d23.0000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA5MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Contact Map"
        ></iframe>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button className="btn primary" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
