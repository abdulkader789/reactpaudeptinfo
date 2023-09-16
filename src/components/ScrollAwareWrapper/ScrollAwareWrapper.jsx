import React, { useState, useEffect } from "react";

import NavBar from "../NavBar/NavBar";
function ScrollAwareWrapper({ children }) {
  const [scrolling, setScrolling] = useState(false);

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
    <div className={`scroll-aware-wrapper ${scrolling ? 'scrolling' : ''}`}>
      <NavBar />
      {children}
    </div>
  );
}

export default ScrollAwareWrapper;
