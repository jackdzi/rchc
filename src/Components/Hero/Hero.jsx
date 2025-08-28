import React from "react";
import "./Hero.css";
import logo from "../../images/Rice Critical Humanities_.png";

const Hero = ({ title }) => {
  return (
    <div className="hero">
      <div className="contents" style={{ marginLeft: "5%" }}>
        <div
          className="icon"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            height: "100%",
            width: "90%",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="arrow icon"
            className="arrowIcon"
            style={{ maxWidth: "100%", maxHeight: "100%", height: "auto" }}
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                width: "80%", // Changed from 100% to 80%
                fontFamily: "Minion Variable",
                fontSize: "20px",
                fontStyle: "italic",
                textAlign: "justify",
              }}
            >
We are a collective founded by and for Rice undergraduates to analyze, question, and discuss the socio-political issues shaping our present. We’re open for anybody who’s interested in thinking about culture, technology, power, and society in ways that challenge conventional understandings.
That means thinking about everything from post-truth politics to global warming, identity in an algorithmic society to migration and borders, the future of activism to the future of work (and much more).

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
