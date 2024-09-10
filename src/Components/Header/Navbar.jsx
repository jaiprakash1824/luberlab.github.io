import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu"; // Import the FullScreenMenu component
import ContactButton from "./ContactButton"; // Assuming you have a ContactButton component
import "./Navbar.css"; // Import the necessary CSS

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(true);
  const navigate = useNavigate();

  // Set the animation to play on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNavbar(false); // Disable the animation after it runs once
    }, 1000); // Duration matches CSS animation time

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Handle the menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle menu item click and navigation
  const handleMenuClick = (path) => {
    setMenuOpen(false); // Close the menu
    setAnimateNavbar(true); // Trigger navbar animation
    navigate(path); // Navigate to the selected path
    setTimeout(() => {
      setAnimateNavbar(false); // Reset animation state after it completes
    }, 1000);
  };

  // Handle the contact button click
  const handleContactClick = () => {
    navigate("/contact");
  };

  // Define the menu items
  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "RESEARCH", path: "/research" },
    { label: "PUBLICATIONS", path: "/publications" },
    { label: "NEWS", path: "/news" },
    { label: "TEAMS", path: "/team" },
    { label: "JOIN US", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`navbar-container ${animateNavbar ? "animate-slide" : ""}`}
      >
        <div className="nav-inner-container">
          <div></div>
          <div className="dots-container" onClick={handleMenuToggle}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="navbar-contact-button">
            <ContactButton title="Contact Now" onClick={handleContactClick} />
          </div>
        </div>
      </div>

      {/* Render the FullScreenMenu */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={handleMenuToggle}
        menuItems={menuItems}
        onMenuItemClick={handleMenuClick}
      />
    </>
  );
};

export default NavBar;
