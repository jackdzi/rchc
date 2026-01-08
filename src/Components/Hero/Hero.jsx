import React from "react";
import "./Hero.css";
import logo from "../../images/Rice Critical Humanities_.png";

const Hero = ({ title }) => {
  return (
    <div className="hero">
      <div className="contents" style={{ marginLeft: "5%" }}>
        <div className="hero-content">
          <img
            src={logo}
            alt="arrow icon"
            className="hero-image"
          />
          <div className="hero-text-container">
            <div className="hero-text">
              We are a collective founded by and for Rice undergraduates to analyze, question, and discuss the socio-political issues shaping our present. We're open for anybody who's interested in thinking about culture, technology, power, and society in ways that challenge conventional understandings.
              That means thinking about everything from post-truth politics to global warming, identity in an algorithmic society to migration and borders, the future of activism to the future of work (and much more).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
