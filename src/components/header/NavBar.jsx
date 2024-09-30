import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenMenu from "./FullScreenMenu";
import ContactButton from "./ContactButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNavbar(false); // Disable animation after it runs once
    }, 1000); // Match duration with animation time

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
        className={`w-full h-[70px] flex justify-center items-center relative z-10 bg-black transition-all duration-1000 ${
          animateNavbar ? "animate-navbarSlideDown" : ""
        }`}
      >
        <div className="w-full flex justify-between items-center px-5 h-[5vh] relative">
          <div></div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-2 cursor-pointer transition-transform duration-300 mt-4 hover:rotate-45"
            onClick={handleMenuToggle}
          >
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          </div>
          <div className="absolute right-5 hidden sm:block">
            {/* Hides the ContactButton on small screens */}
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
