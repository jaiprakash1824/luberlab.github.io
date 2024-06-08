import PropTypes from "prop-types";
import "./new_card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ member, imageUrl }) => {
  const generateURLParams = (member) => {
    const params = new URLSearchParams();
    Object.keys(member).forEach((key) => {
      if (typeof member[key] === "string" || typeof member[key] === "number") {
        params.append(key, member[key]);
      } else if (Array.isArray(member[key])) {
        params.append(key, member[key].join(","));
      }
    });
    return params.toString();
  };

  const openMemberPage = () => {
    const memberParams = generateURLParams(member);
    const url = `/individual-page?${memberParams}`;
    window.open(url, "_blank");
  };

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
            <a href="#" onClick={openMemberPage}>
              {member.name}
            </a>
          </div>
          <div className="team-card-subtitle">{member.degree}</div>
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
        <div className="team-card-learn-more">
          <a href="#" onClick={openMemberPage}>
            Learn More <span className="arrow">→</span>
          </a>
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
    researchAreas: PropTypes.string, // Ensure this is a string
    email: PropTypes.string,
  }).isRequired,
  imageUrl: PropTypes.string,
};

export default TeamCard;
