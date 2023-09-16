import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      const topNav = document.querySelector(".topNav");
      const navbar = document.querySelector(".navbar");
      
  
      if (topNav && navbar) {
        const topNavHeight = topNav.clientHeight;
  
        // Check the scroll position
        if (window.scrollY > topNavHeight) {
          // Hide the top navigation bar
          topNav.style.display = 'none';
        
          // Make the main navigation bar sticky
          navbar.style.position = 'fixed';
          navbar.style.top = '0';
          navbar.style.zIndex = '20';
         navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Semi-transparent black
          // Add bottom margin to the navbar
        } else {
          // Show the top navigation bar
          topNav.style.display = 'flex';
        
          // Reset the main navigation bar styles
          navbar.style.position = 'sticky';
          navbar.style.top = '';
          navbar.style.zIndex = '20';
          navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Semi-transparent black
   
        }
      }

    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <section className="relative mainContainer">
      <div className="h-10 w-full topNav flex justify-around items-center">
      <FontAwesomeIcon icon={faFacebook} className="code-icon text-white" />
      <FontAwesomeIcon icon={faTwitter} className="code-icon text-white" />
      <FontAwesomeIcon icon={faInstagram} className="code-icon text-white" />

      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            PAUDEPTINFO
            <FontAwesomeIcon icon={faCode} className="code-icon" />
          </NavLink>

          <div className={`nav-menu ${click ? "active" : ""}`}>
            <ul className="nav-list ">
             
              <li className="close-btn cursor-pointer" onClick={handleClick}><FontAwesomeIcon className="fa-icon" icon={click ? faTimes : faBars} />
         </li>
              <li className="nav-item">
                <NavLink exact="true" to="/" onClick={handleClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/paudeptinfo" onClick={handleClick}>
                  Get Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/about" onClick={handleClick}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/blog" onClick={handleClick}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/contact" onClick={handleClick}>
                  Contact Us
                </NavLink>
              </li>
              
            </ul>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon className="fa-icon" icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
