import PropTypes from "prop-types";
import "./TeamCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ member, imageUrl }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={member.name}
            className="team-card-image-img"
          />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="team-card-inner">
        <div className="team-card-top">
          <div className="team-card-title">
            <a href="#">{member.name}</a>
          </div>
          <div className="team-card-subtitle">{member.degree}</div>
          <div className="team-card-role">{member.role}</div>
          <div className="team-card-advisor">Advisor: {member.advisor}</div>
          <div className="team-card-description">
            <ul>
              {member.description.split("\n").map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="team-card-footer-wrapper">
          <div className="team-card-links">
            <span className="team-card-misc">
              <a href={member.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={member.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={member.scholar}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href={member.github}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    degree: PropTypes.string,
    role: PropTypes.string,
    advisor: PropTypes.string,
    description: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    scholar: PropTypes.string,
    github: PropTypes.string,
    researchAreas: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  imageUrl: PropTypes.string,
};

export default TeamCard;
