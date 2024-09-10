import PropTypes from "prop-types";
import { useState } from "react";
import "./FullScreenMenu.css";

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
    <div className={`full-screen-menu ${isClosing ? "close" : "open"}`}>
      <div className="close-button" onClick={handleClose}>
        ✖
      </div>
      <ul className="menu-options">
        {menuItems.map((item, index) => (
          <li
            key={index}
            data-text={item.label}
            onClick={() => handleMenuItemClick(item.path)}
          >
            {item.label}
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
