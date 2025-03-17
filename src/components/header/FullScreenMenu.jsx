import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const FullScreenMenu = ({ isOpen, onClose, menuItems, onMenuItemClick }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  // Get the active menu item based on the URL
  const activeMenu = menuItems.find((menu) => menu.path === location.pathname);

  // Determine which submenu to show (hovered or active)
  const displayedMenu = hoveredMenu || activeMenu;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  const handleMenuItemClick = (path) => {
    setIsClosing(true);
    setTimeout(() => {
      onMenuItemClick(path);
      setIsClosing(false);
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-custom-gradient text-white flex flex-col lg:flex-row items-start justify-start z-[9998] px-6 sm:px-12 lg:px-24 py-8 ${
        isClosing ? "animate-slideDown" : "animate-slideUp"
      }`}
    >
      {/* Close Button */}
      <div
        className="absolute top-5 right-5 w-10 h-10 flex justify-center items-center bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-800 rounded-full cursor-pointer z-[9999] transition-colors duration-300"
        onClick={handleClose}
      >
        ✖
      </div>

      {/* Main Navigation (First Column) */}
      <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
        <div className="w-full max-w-[850px] sm:max-w-[800px] md:max-w-[850px] mb-10">
          <img
            src="src/assets/bg-logo-white.png" // Replace with actual path
            alt="Menu Logo"
            className="w-full h-auto"
          />
        </div>

        <ul className="flex flex-col items-start text-left gap-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                className="w-full"
                onMouseEnter={() => setHoveredMenu(item)} // Show submenu on hover
                onMouseLeave={() => setHoveredMenu(null)} // Revert to active menu on leave
              >
                <div
                  className="flex items-center space-x-3 cursor-pointer text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-none text-white transition-transform duration-300 hover:scale-105"
                  onClick={() => handleMenuItemClick(item.path)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="w-[18px] h-[18px] bg-white rounded-[4px] transform rotate-45"></div>
                  )}
                  <span>{item.label}</span>
                </div>

                {/* Submenu Items - Shown Below for Small Screens */}
                {isActive && (
                  <ul className="lg:hidden mt-2 pl-6 text-white text-[18px] space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="opacity-80">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Submenu (Second Column - Aligns with First Column) */}
      {displayedMenu?.subItems.length > 0 && (
        <div className="hidden lg:flex flex-col w-2/3 pl-12 mt-24 self-start">
          <ul className="text-white text-[18px] space-y-4">
            {displayedMenu.subItems.map((subItem, subIndex) => (
              <li key={subIndex} className="opacity-80">
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

FullScreenMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
};

export default FullScreenMenu;
