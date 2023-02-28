import React from 'react';
import "../styles/About.css"
import backgroundImage from "../assets/images/profpic.png"
export default function About() {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div id="hero" className="hero route bg-image" style={backgroundStyles}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <p className="display-6 color-d">Hello, world!</p>
          <h1 className="hero-title mb-4">I'm Steven McCombe</h1>
          <p className="hero-subtitle"><span>Full Stack Web Designer</span></p>
        </div>
      </div>
    </div>

    </div>
  );
}
