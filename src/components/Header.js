import React from 'react';
import backgroundImage from "./assets/images/profilepicture.png"


const backgroundStyles = {
  backgroundImage: `url(${backgroundImage})`,
  height: '400px'
};

function Header() {
  return (
    <header>
      <div
        className='p-5 text-center img-fluid border-bottom'
        style={ backgroundStyles}
    >
      <div >
        <div className='d-flex justify-content-center align-items-center h-100 '>
          <div className='text-white'>
            <h4 className='mb-3 typer'>"Hello, World!"</h4>
            <h4 className='mb-0 '>I'm</h4>
            <h1 className='mb-3 '>Steven McCombe</h1>
            <h4 className='mb-3 '>Full Stack Web Designer</h4>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;
