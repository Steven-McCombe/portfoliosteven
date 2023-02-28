import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
  return (
<MDBFooter bgColor='dark' className='text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className = "color-w">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='www.facebook.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook' />
          </a>
          <a href='https://twitter.com/st_mccombe' className='me-4 text-reset '>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='mailto:smccombe93@gmail.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/st_mccombe' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/steven-mccombe-82953151' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/Steven-McCombe' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>


    </MDBFooter>
  );
}

export default Footer;
