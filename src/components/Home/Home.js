import React from "react";
import HomePage from "../HomePage/HomePage";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default Home;
