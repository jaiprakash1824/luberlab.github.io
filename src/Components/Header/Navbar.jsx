import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle navigation and close drawer
  const handleMenuClick = (path) => {
    navigate(path); // Redirect to the respective page
    setMenuOpen(false); // Close the drawer
  };

  return (
    <div className="navbar-container">
      {!menuOpen ? (
        <div className="dots-container" onClick={handleMenuToggle}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className="full-screen-menu">
          <div className="close-button" onClick={handleMenuToggle}>
            ✖
          </div>
          <ul className="menu-options">
            {/* Call handleMenuClick with the appropriate route */}
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
