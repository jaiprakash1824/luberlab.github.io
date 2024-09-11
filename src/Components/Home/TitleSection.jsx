import PropTypes from "prop-types";
import "./TitleSection.css";

const TitleSection = ({ titleText, isVisible }) => {
  return (
    <div className={`title-section ${isVisible ? "animate" : ""}`}>
      <h1>{titleText}</h1>
    </div>
  );
};

TitleSection.propTypes = {
  titleText: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired, // New prop to handle animation trigger
};

export default TitleSection;
