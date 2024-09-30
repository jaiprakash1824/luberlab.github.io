import PropTypes from "prop-types";
import { useState } from "react";

const FullScreenMenu = ({ isOpen, onClose, menuItems, onMenuItemClick }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); // Trigger slide-down animation
    setTimeout(() => {
      onClose(); // Close after animation finishes
      setIsClosing(false); // Reset after closing
    }, 500); // Match the slide-down duration
  };

  const handleMenuItemClick = (path) => {
    setIsClosing(true); // Trigger slide-down animation on item click
    setTimeout(() => {
      onMenuItemClick(path);
      setIsClosing(false); // Reset after navigation
    }, 500);
  };

  if (!isOpen && !isClosing) return null; // Don't render if not open or closing

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-start z-[9998] ${
        isClosing ? "animate-slideDown" : "animate-slideUp"
      }`}
    >
      <div
        className="absolute top-4 right-5 w-12 h-12 flex justify-center items-center bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-800 rounded-full cursor-pointer z-[9999] transition-colors duration-300"
        onClick={handleClose}
      >
        ✖
      </div>
      <ul className="flex flex-col items-center justify-center w-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer text-3xl font-extrabold mb-8 overflow-hidden"
            data-text={item.label}
            onClick={() => handleMenuItemClick(item.path)}
          >
            {/* Button animation applied to span elements */}
            <span
              className="absolute top-full left-0 w-full transition-all duration-500 animate-buttonSlide"
              aria-hidden="true"
            >
              {item.label}
            </span>
            <span className="relative">{item.label}</span>
            <span
              className="absolute top-0 left-0 w-full transition-all duration-500 animate-buttonHide"
              aria-hidden="true"
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

FullScreenMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
};

export default FullScreenMenu;
