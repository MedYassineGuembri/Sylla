import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Navbar.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="main_container"></div>
    </div>
  );
};

export default Home;
