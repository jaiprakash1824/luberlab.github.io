import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ScrollSection.css"; // Ensure you have a CSS file linked

const ScrollSection = ({ mainText }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component has mounted
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure smooth transition
  }, []);

  return (
    <div className="scroll-section-container">
      <div className={`scroll-section-content ${isVisible ? "animate" : ""}`}>
        <h1 className="scroll-main-text">{mainText}</h1>
      </div>
    </div>
  );
};

ScrollSection.propTypes = {
  mainText: PropTypes.string.isRequired,
};

export default ScrollSection;
