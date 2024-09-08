import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactButton from "./ContactButton"; // Assuming you've implemented the ContactButton component
import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(true); // Set true initially to trigger animation on load
  const navigate = useNavigate();

  // Play the slide animation when the component mounts (first load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNavbar(false); // Disable the animation after it runs once
    }, 1000); // Duration should match the CSS animation time

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (path) => {
    setMenuOpen(false);

    // Trigger navbar animation
    setAnimateNavbar(true);
    navigate(path);
    setTimeout(() => {
      setAnimateNavbar(false); // Reset animation state
    }, 1000); // Adjust time to match animation duration (1s here)
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className={`navbar-container ${animateNavbar ? "animate-slide" : ""}`}>
      <div className="nav-inner-container">
        <div></div>
        <div className="dots-container" onClick={handleMenuToggle}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <ContactButton title="Contact Now" onClick={handleContactClick} />
      </div>

      {menuOpen && (
        <div className="full-screen-menu">
          <div className="close-button" onClick={handleMenuToggle}>
            ✖
          </div>
          <ul className="menu-options">
            <li data-text="HOME" onClick={() => handleMenuClick("/")}>
              HOME
            </li>
            <li
              data-text="RESEARCH"
              onClick={() => handleMenuClick("/research")}
            >
              RESEARCH
            </li>
            <li
              data-text="PUBLICATIONS"
              onClick={() => handleMenuClick("/publications")}
            >
              PUBLICATIONS
            </li>
            <li data-text="NEWS" onClick={() => handleMenuClick("/news")}>
              NEWS
            </li>
            <li data-text="TEAMS" onClick={() => handleMenuClick("/team")}>
              TEAMS
            </li>
            <li data-text="JOIN US" onClick={() => handleMenuClick("/contact")}>
              JOIN US
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
