import React from "react";
import "../Css/Header.css"; // Import custom CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Tripavi Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="/sri-lanka-tours">Sri Lanka Tours</a></li>
            <li><a href="/sports-tours">Sports Tours</a></li>
            <li><a href="/medical-holidays">Medical Holidays</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
        <div className="contact">
          <a href="tel:+94112712100" className="phone-link">+9411 2712100</a>
        </div>
      </div>

      <div className="header-banner">
        <h1>Ayubowan!</h1>
        <p>You are special! We believe your trip to Sri Lanka should be too!</p>

        <div className="search-bar">
          <ul className="search-tabs">
            <li>Hotels</li>
            <li>Tours</li>
            <li>Activities</li>
          </ul>

          <form className="search-form">
            <input type="text" placeholder="Where are you going?" />
            <input type="date" placeholder="Check-In - Out" />
            <input type="text" placeholder="Guests (e.g., 1 Adult - 0 Child)" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
