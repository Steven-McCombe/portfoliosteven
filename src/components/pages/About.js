import React from 'react';
import "../styles/About.css"
import Header from "../Header"
import {Container} from "react-bootstrap"
import backgroundImage from "../assets/images/profilepicture.png"


const backgroundStyles = {
  backgroundImage: `url(${backgroundImage})`,
  height: '400px'
};
export default function About() {
  return (
    <div>
      <Header></Header>
      <div>
        <div className='container'>
          <div className='text-white'>
            <p className='mb-3 mt-3'> As a software engineer, I am passionate about creating innovative solutions to complex problems. I have a deep love for technology and I am always looking for new ways to incorporate the latest advancements into my work. My skills include proficiency in multiple programming languages and frameworks, strong analytical abilities, and a keen attention to detail. I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to deliver high-quality products on time. In my free time, I enjoy playing golf and soccer.</p>
          </div>
        </div>
      </div>
    <div
        className='p-5 img-fluid '
        style={ backgroundStyles}
    >
    </div>

    </div>
  );
}
