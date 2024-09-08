import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactButton from "./ContactButton"; // Assuming you've implemented the ContactButton component
import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path); // Redirect to the respective page
    setMenuOpen(false); // Close the drawer
  };

  const handleContactClick = () => {
    navigate("/contact"); // Navigate to the contact page when the button is clicked
  };

  return (
    <div className="navbar-container">
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
