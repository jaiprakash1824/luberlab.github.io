import { useState } from "react";
import PropTypes from "prop-types";

const ContactButton = ({ title, onClick }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <button
      className={`relative inline-block h-12 px-8 py-2 font-bold uppercase border-2 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out sm:inline-block ${
        hovering ? "text-black" : "text-white"
      }`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text Content */}
      <span className="relative z-20">{title}</span>

      {/* Background animation */}
      <span
        className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-white ${
          hovering ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 10 }}
      />
    </button>
  );
};

ContactButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactButton;
