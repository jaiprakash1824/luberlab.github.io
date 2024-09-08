import { useState } from "react";
import "./ContactButton.css";
import PropTypes from "prop-types";

const ContactButton = ({ title, onClick }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <button
      className={`home-contact-button ${hovering ? "hovered" : ""}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
    </button>
  );
};
ContactButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactButton;
