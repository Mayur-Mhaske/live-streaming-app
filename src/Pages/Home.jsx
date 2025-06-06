import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1 className="fade-in">
            Stream Anywhere, Anytime For <span>FREE</span>
          </h1>
          <p className="fade-in delay-1">Live Streaming Made Easy</p>
          <Link className="btn fade-in delay-2 " to="/live-stream">
            Get Started
          </Link>
        </div>
        {/* Image */}
        <div className="image-container slide-in">
          <img src={img1} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Home;
