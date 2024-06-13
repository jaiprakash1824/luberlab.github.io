// NewsCard.jsx
import PropTypes from "prop-types";
import "./NewsCard.css";

const NewsCard = ({ title, description }) => {
  return (
    <div className="home-news-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsCard;
