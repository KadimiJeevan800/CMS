import React from 'react'
import './content.css';

function content(props) {

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 5000); // Change image every 2 seconds
// }

  return (
    <section classNameName='content'>
     <h3 className='text-info'>Welcome to CMS Tutorial Website</h3>

     <p>
     A content management system, often abbreviated as CMS, is software that helps users create, manage, and modify content on a website without the need for specialized technical knowledge.
      In simpler language, a content management system is a tool that helps you build a website without needing to write all the code from scratch (or even know how to code at all).
     </p>


    <div className='cards'>
      <div className='card '>
           <h3 className='text-secondary'>Wordpress</h3>
           <p>
           WordPress is an open source Content Management System (CMS), which allows the users to build dynamic 
           websites and blog. WordPress is the most popular blogging system on the web and allows updating, customizing 
           and managing the website from its back-end CMS and components. This tutorial will teach you the basics of WordPress
            using which you can create websites with ease. The tutorial is divided into various sections for convenience.
             Each of these sections contain related topics with screenshots explaining the WordPress admin screens.
           </p>
      </div>
      <div className='card'>
        <h3 className='text-primary'>Drupal</h3>
        <p>
        Drupal is a free and open source Content Management System (CMS) that allows organizing, managing 
        and publishing your content. This reliable and secure CMS is built on PHP based environment and powers 
        millions of applications and websites. This tutorial will teach you the basics of Drupal using which you can create 
        a blog or a website with ease.
        </p>
      </div>
      <div className='card'>
        <h3 className='text-danger'>Magento</h3>
        <p>
        Magento is an open source E-commerce software, created by Varien Inc., which is useful for
         online business. It has a flexible modular architecture and is scalable with many control options that 
         is helpful for users. Magento uses E-commerce platform which offers organizations ultimate E-commerce solutions and 
         extensive support network. This tutorial will teach you the basics of Magento using which you can create websites with ease.
          The tutorial is divided into various sections and each of these sections contain related topics with screenshots explaining the Magento admin screens.
        </p>
      </div>

      <div className='card '>
        <h3 className='text-success'>More Tools</h3>
        <p>
          <ul>
            <li>Joomla</li>
            <li>Umbraco</li>
            <li>Kentico CMS</li>
            <li>Concrete CMs</li>
            <li className='text-Tertiary'>Many More</li>
          </ul>
        </p>
      </div>
    </div>

    <div className='get-started bg-primary'>
1
    </div>

    </section>
  );
}


export default content;
