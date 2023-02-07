import React from 'react'
// import { prototype } from 'react-fontawesome';
import { Outlet, Link } from "react-router-dom";
import './header.css';
import PropTypes from 'prop-types'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import FontAwesomeIcon from 'react-fontawesome';
import HomeIcon from '@mui/icons-material/Home';
import GiteIcon from '@mui/icons-material/Gite';
export default function Header(props) {
  return (
    <header> 
    <div className='Header'>
         {/* <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand hov" href="/">
            CMS
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item hov">
                <a className="nav-link" href="/wordpress">
                  Wordpress
                </a>
              </li>
              <li className="nav-item hov">
                <a className="nav-link" href="/drupal">
                  Drupal
                </a>
              </li>
              <li className="nav-item hov">
                <a className="nav-link ">Magento</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Our Works 
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Future Goals
                    </a>
                  </li>
                </ul>
              </li>
             
            </ul>
            <form className="d-flex" role="search" method='post' >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

      <Outlet />

    </div>
    </header>
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