import React from 'react';

function Header() {
  return (
    <header className = "container mt-3">
        <div className='d-flex justify-content-center align-items-center h-100 '>
          <div className='text-white'>
            <h4 className='mb-3 typer'>"Hello, World!"</h4>
            <h4 className='mb-1'>I'm</h4>
            <h1 className='mb-1'>Steven McCombe</h1>
            <h4 className='mb-1'>Full Stack Web Designer</h4>
          </div>
        </div>
  </header>
  );
}

export default Header;
