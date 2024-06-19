import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./new_card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { MemberContext } from "./MemberContext";

const TeamCard = ({ member, imageUrl }) => {
  const { setSelectedMember } = useContext(MemberContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedMember({ ...member, imageUrl });
    navigate("/individual-page");
  };

  return (
    <div className="team-card" onClick={handleClick}>
      <div className="team-card-image">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={member.Name}
            className="team-card-image-img"
          />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="team-card-inner">
        <div className="team-card-top">
          <div className="team-card-title">
            <a onClick={handleClick}>{member.Name}</a>
          </div>
          <div className="team-card-subtitle">{member.Degree}</div>
        </div>
        <div className="team-card-footer-wrapper">
          <div className="team-card-links">
            <span className="team-card-misc">
              <a
                href={member.LinkedIn_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={member.Twitter_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={member.Google_Scholar_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href={member.GitHub_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
        </div>
        <div className="team-card-learn-more">
          {/* <a onClick={handleClick}> */}
          <a>
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    Degree: PropTypes.string,
    Designation: PropTypes.string,
    Mentors: PropTypes.string,
    Bio: PropTypes.string,
    LinkedIn_URL: PropTypes.string,
    Twitter_URL: PropTypes.string,
    Google_Scholar_URL: PropTypes.string,
    GitHub_URL: PropTypes.string,
    Research_Category: PropTypes.string,
    Achievements: PropTypes.string,
    Areas_of_Research_Interest: PropTypes.string,
    Dissertation_Committee_Members: PropTypes.string,
    Dissertation_topic: PropTypes.string,
    Graduation_Date: PropTypes.string,
    Education: PropTypes.string,
    Resume_CV: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  imageUrl: PropTypes.string,
};

export default TeamCard;
