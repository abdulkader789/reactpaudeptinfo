import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact="true" to="/" className="nav-logo">
          PAUDEPTINFO
          <FontAwesomeIcon icon={faCode} className="code-icon" />
        </NavLink>

        <div className={`nav-menu ${click ? "active" : ""}`}>
          <ul className="nav-list ">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blog"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
