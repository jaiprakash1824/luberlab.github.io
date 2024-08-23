import PropTypes from "prop-types";
import "./NewsCard.css";
import Title from "antd/es/skeleton/Title";

const NewsCard = ({ member }) => {
  const { date, content, link } = member;
  return (
    <div className="news-card">
      <div className="news-date">{date}</div>
      <div className="news-title">{Title}</div>
      <div className="news-content">{content}</div>
      <a href={link} className="news-link">
        Read more
      </a>
    </div>
  );
};

NewsCard.propTypes = {
  member: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
