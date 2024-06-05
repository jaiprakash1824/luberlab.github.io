import PropTypes from "prop-types";
import "./ParallaxSection.css";

const ParallaxSection = ({ image, height }) => {
  return (
    <div
      className="parallax-section"
      style={{ backgroundImage: `url(${image})`, height }}
    ></div>
  );
};

ParallaxSection.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ParallaxSection;
