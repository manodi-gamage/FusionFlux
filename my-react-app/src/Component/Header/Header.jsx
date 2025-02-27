import React from "react";
import "../Css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Tripavi Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sri-lanka-tours">Sri Lanka Tours</a></li>
          <li><a href="#hotels">Hotels</a></li>
          <li><a href="#sports-tours">Sports Tours</a></li>
          <li><a href="/Translator">Translator</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="/Contactus">Contact Us</a></li>
        </ul>
      </nav>
      <div className="contact">
        <button className="contact-button">+94112712100</button>
      </div>
    </header>
  );
};

export default Header;
