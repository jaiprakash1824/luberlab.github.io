import PropTypes from "prop-types";
import "./NewCardMain.css";
const baseURL = import.meta.env.BASE_URL;

const NewCardMain = ({ member }) => {
  return (
    <div className="news-card">
      <div className="news-card-inner">
        <div className="new-card-image">
          <img
            src={baseURL + "assets/sample.png"}
            className="card-image-style"
          ></img>
        </div>
        <div>
          <div className="news-card-top">
            <div className="news-card-title">
              {member.link ? (
                <a href={member.link} className="link">
                  {member.date}
                </a>
              ) : (
                <span>{member.date}</span>
              )}
            </div>
            <div className="news-card-subtitle">{member.content}</div>
          </div>
          {member.link && (
            <div className="news-card-learn-more">
              <a
                href={member.link}
                className="link"
                target="_blank"
                style={{ color: "white" }}
              >
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

NewCardMain.propTypes = {
  member: PropTypes.shape({
    date: PropTypes.string,
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default NewCardMain;
