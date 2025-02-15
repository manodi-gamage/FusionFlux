import React from "react";
//import Header from "../components/header/Header";
import Header from "../Component/Header/Header.jsx";
import Slider from "../Component/slider.jsx";
//import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <Slider />
        <h1>Welcome to Tripavi!</h1>
      </main>
    </div>
  );
};

export default HomePage;
