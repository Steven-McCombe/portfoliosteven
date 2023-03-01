import React from 'react';
import "../styles/About.css"
import Header from "../Header"
import backgroundImage from "../assets/images/profpic.png"
export default function About() {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div>
    <Header></Header>
      </div>
  );
}
