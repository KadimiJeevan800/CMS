import 'devextreme/dist/css/dx.light.css';
import React, { useState } from "react";
// import './images/';
// import { Provider } from 'react-redux'
// import store from './store'
import img1 from './images/drupal.jpg'
import Cart from './pages/cart';
import Ekart from './pages/Ekart/Ekart';
import 'devextreme/dist/css/dx.light.css';
import DrupalData from './pages/Drupal/record.json';
import WordPressData from './pages/Wordpress/record.json';
import img2 from './images/magento.png';
import img3 from './images/wordpress.png';
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Wordpress from './pages/Wordpress/wordpress';
import Drupal from './pages/Drupal/drupal';
import Magento from './pages/Magento/Magento'
import NoPage from './pages/NoPage'
import Notification from './pages/Notification';
import Register from './pages/Data/register'
import d from './pages/Ekart/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  let Component;
  // console.log(d);
  const [cartItems,setCartItems] = useState(0);
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
          <Route path="Ekart" element={<Ekart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="Register" element={<Register />} />
          <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
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
