import PropTypes from "prop-types";
import "./HomeResearchCard.css";

const HomeResearchCard = ({ imagePath, title }) => {
  return (
    <div className="home-research-card">
      <div className="home-research-card-image-container">
        <img src={imagePath} alt={title} className="home-research-card-image" />
      </div>
      <div className="home-research-card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

HomeResearchCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeResearchCard;
