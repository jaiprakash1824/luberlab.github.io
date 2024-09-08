import "./HomeNewsCard.css";

// eslint-disable-next-line react/prop-types
const HomeNewsCard = ({ title, date, content, link }) => {
  return (
    <div className="home-news-card">
      <div className="home-news-header">
        <h3 className="home-news-title">{title}</h3>
        <p className="home-news-date">{date}</p>
      </div>
      <div className="home-news-description-container">
        <p className="home-news-description">{content}</p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="home-news-link-btn"
        >
          Read More
        </a>
      )}
    </div>
  );
};

export default HomeNewsCard;
