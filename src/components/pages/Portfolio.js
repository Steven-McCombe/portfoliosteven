import React from 'react';
import Card from "../Card";

const projects = [
  {
  name: 'FLTCHK',
  description: 'Flight Status Checker',
  image: '',
  repo: 'https://github.com/Steven-McCombe/FLTCHK-TRAVEL-TRACKER',
  live: 'https://samvillafana.github.io/FLTCHK-TRAVEL-TRACKER/#reload'
  },
  {
  name: 'Phantom Plates',
  description: 'Full Stack - Home Kitchens and Cooked Goods',
  image: '',
  repo: 'https://github.com/Steven-McCombe/Phantom-Plates',
  live: 'https://peaceful-plains-78578.herokuapp.com/'
  },
  {
  name: 'TechTalk',
  description: 'Full Stack - Tech Blogging Site',
  image: '',
  repo: 'https://github.com/Steven-McCombe/TechTalk',
  live: 'https://powerful-stream-84174.herokuapp.com/'
  },
  {
  name: '',
  description: '',
  image: '',
  repo: '',
  live: ''
  },
  {
  name: '',
  description: '',
  image: '',
  repo: '',
  live: ''
  },
  {
  name: '',
  description: '',
  image: '',
  repo: '',
  live: ''
  },
  {
  name: '',
  description: '',
  image: '',
  repo: '',
  live: ''
  },
];

export default function Portfolio() {
  return (
    <div className='container'>
      <Card projects={projects} />
    </div>
  )
}
  