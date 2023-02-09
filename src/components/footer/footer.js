import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import './script.js';
import BusinessIcon from '@mui/icons-material/Business';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
export default function footer() {


  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className='footer bg-black bg-gradient'>
      <div className='footer-top'>
        <div className='More-about-company'>
          <h4>More About Company</h4>
          <p>
            A content management system is for creating, managing, and optimizing your customers' digital experience. 
            More specifically, a CMS is a software application that allows users to collaborate in the creation, editing, 
            and production of digital content: web pages, blog posts, etc.
          </p>

        </div>

        <div className='keep-connected '>
          <h4>Keep Connected</h4>
          <div className='social-links'>
          <span>
            <FontAwesomeIcon icon={faFacebook} className="hov" /> <p>Like us on Facebook</p> </span>
            <span>
            <FontAwesomeIcon icon={faTwitter} className="hov" /> <p> Tweet us on Twitter</p></span>
            <span>
            <FontAwesomeIcon icon={faLinkedin} className="hov" /> <p>Connect us in Linkedin</p> </span>
            <span>
            <FontAwesomeIcon icon={faYoutube} className="hov" /> <p> Subscribe us on Youtube</p></span>
            <span>
            <FontAwesomeIcon icon={faInstagram} className="hov" /><p> Follow us on Instagram</p></span>
            {/* <i class="fa-brands fa-square-twitter"></i> */}
          </div>

        </div>

        <div className='company-address'>
          <h4>Company Contact Address</h4>
          <div className='cmp-info'>
            <span className='address'>

           < BusinessIcon  className='hov'/> 14th floor ,<br />GAR Laxmi Infobahn SEZ,<br /> Hyderabad, 500075
            </span>
            <span className='contact-no'>
           <ContactPhoneIcon  className='hov'/>  123456789
            </span>
            <span className='email'>
             <ContactMailIcon className='hov'/> Itops@cms.in
            </span>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>

        <div className='credits'>CC &copy;{year} Content Management System . All Rights are Resereved</div>
        <div className='links '>
          <a className='hov' href='/Company-Contact' id='cmp'>Company Contact</a>
          <a className='hov' href='/Pirvacy-Policy'>Pirvacy Policy</a>
          <a className='hov' href='/Terms-Conditions'>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
