import 'devextreme/dist/css/dx.light.css';
import React, { useState } from "react";
// import './images/';
import { Provider } from 'react-redux'
// import store from './store'
import img1 from './images/drupal.jpg'
import Notification from './components/Notification';
import Ekart from './components/Ekart/Ekart.js';
import 'devextreme/dist/css/dx.light.css';
import DrupalData from './components/Drupal/record.json';
import WordPressData from './components/Wordpress/record.json';
import img2 from './images/magento.png';
import img3 from './images/wordpress.png';
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Wordpress from "./components/Wordpress/wordpress";
import Drupal from './components/Drupal/drupal'
import Magento from './components/Magento/Magento'
import NoPage from './components/NoPage'

import Register from './components/Data/register'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  let Component;
  // const [name,setname]=useState("Alien");
//  switch(window.location.pathname)
//  {
//     case '/': 
//     Component=<Content name="Jeevan"/>
//         break;
//     case '/wordpress':    
//     Component=<Wordpress  />
//       break;
//     case '/drupal':
//       Component=<Drupal  />
//       break;  
//  }

  return (
    <div className="main">
      {/* <Header /> */}
      {/* <Content title="Content Works..." /> */}
      {/* {Component} */}
    

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header  />}>
          <Route index  element={<Content name="Jeevan"/>} />
          <Route path="Wordpress" element={<Wordpress record={WordPressData} />} />
          <Route path="Drupal" element={<Drupal record={DrupalData} />} />
          <Route path="Magento" element={<Magento  record={DrupalData}/>} />
          <Route path="Ekart" element={<Ekart />} />
          <Route path="Register" element={<Register />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
      <div className="cms-images">
       <a href="/wordpress" target={'_self'}>
       <img src={img3} alt="Wordpress-photo"/>
        </a> 
        <a  href="/drupal">
        <img src={img1} alt="Drupal-photo" />
        </a>
        
        <a href="/Magento">
        <img src={img2} alt="Magento-photo"/>
        </a>
        
      </div>
      
      
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
