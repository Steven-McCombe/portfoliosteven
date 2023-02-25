import React from 'react';
import Card from "../Card";

const projects = [
  {
  name: 'FLTCHK',
  description: 'Flight Status Checker',
  image: '../Assets/Images/Profile_Picture.jpg',
  repo: 'https://github.com/Steven-McCombe/FLTCHK-TRAVEL-TRACKER',
  live: 'https://samvillafana.github.io/FLTCHK-TRAVEL-TRACKER/#reload'
  },
  {
  name: 'Phantom Plates',
  description: 'Full Stack - Home Kitchens and Cooked Goods',
  image: '../Assets/Images/',
  repo: 'https://github.com/Steven-McCombe/Phantom-Plates',
  live: 'https://peaceful-plains-78578.herokuapp.com/'
  },
  {
  name: 'TechTalk',
  description: 'Full Stack - Tech Blogging Site',
  image: '../Assets/Images/',
  repo: 'https://github.com/Steven-McCombe/TechTalk',
  live: 'https://powerful-stream-84174.herokuapp.com/'
  },
  {
  name: 'World Cup Quiz',
  description: 'Test your Knowledge on the World Cup',
  image: '../Assets/Images/',
  repo: 'https://github.com/Steven-McCombe/world-cup-quiz',
  live: 'https://steven-mccombe.github.io/world-cup-quiz/'
  },
  {
  name: 'Weather Report',
  description: 'Check the weekly forecast in your area',
  image: '../Assets/Images/',
  repo: 'https://github.com/Steven-McCombe/Weather-Report-App',
  live: 'https://steven-mccombe.github.io/Weather-Report-App/'
  },
  {
  name: 'PWA Text Editor',
  description: 'Progressive Web App - Text Editor',
  image: '../Assets/Images/',
  repo: 'https://github.com/Steven-McCombe/PWA_Text_Editor',
  live: 'https://lit-coast-23795.herokuapp.com/'
  },
];

export default function Portfolio() {
  return (
    <div className='container'>
      <Card projects={projects} />
      </div>
  )
}
  