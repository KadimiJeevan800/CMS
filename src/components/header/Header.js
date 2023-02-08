import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './header.css';
import PropTypes from 'prop-types'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GiteIcon from '@mui/icons-material/Gite';
export default function Header(props) {
  return (
    <>
    <header> 
    <div className='Header'>
      <nav  className="navbar navbr navbar-expand-lg bg-body-tertiary mx-auto">
        
        <div className='container-fluid'>

        <Link className="navbar-brand hov " to="/"> CMS</Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className=' navbar-nav me-auto mb-2 mb-lg-0'>
        <li  className="nav-item hov">
            <Link to="/Wordpress" className="nav-link" >WordPress</Link>
          </li>
          <li className="nav-item hov">
            <Link to="/Drupal" className="nav-link">Drupal</Link>
          </li>
          <li className="nav-item hov">
            <Link to="/Magento" className="nav-link ">Magento</Link>
          </li>
          
        </ul>
        <span className='ml-1'>
        <Link to="/Register" className='btn btn-secondary text-white'>  {props.name} <GiteIcon/> </Link>
        </span>
        <span className='ml-1'>
        <Link to="/notification" className='btn '><AddAlertIcon/> </Link>
        </span>

        
        </div>
        </div>
      </nav>

     

    </div>
    </header>
     <Outlet />
     </>
  )
}
Header.defaultProps=
{
  name:"Alien"
}
Header.propTypes=
{
  name: PropTypes.string
}