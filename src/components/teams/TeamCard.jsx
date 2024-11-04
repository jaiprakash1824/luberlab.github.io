import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { MemberContext } from "../../context/MemberContext";

const TeamCard = ({ member, imageUrl }) => {
  const { setSelectedMember } = useContext(MemberContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedMember({ ...member, imageUrl });
    navigate("/individual-page");
  };

  return (
    <div
      className="team-card h-[350px] w-[300px] text-center flex flex-col items-center justify-between bg-white rounded-2xl transition-all duration-300 ease-in-out m-auto hover:scale-105 border border-gray-200 shadow-lg"
      onClick={handleClick}
    >
      <div className="team-card-image flex w-[155px] h-[155px] justify-center m-2.5 rounded-full p-1 bg-blue-100 hover:bg-blue-500">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={member.Name}
            className="team-card-image-img w-[150px] h-[150px] object-cover rounded-full border-2 border-white"
          />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="team-card-inner p-2.5 flex flex-col justify-between flex-grow">
        <div className="team-card-top">
          <div className="team-card-title text-xl capitalize font-semibold text-gray-800 hover:text-blue-500">
            <a onClick={handleClick}>{member.Name}</a>
          </div>
          <div className="team-card-subtitle text-sm text-gray-600 pt-1">
            {member.Degree}
          </div>
        </div>
        <div className="team-card-footer-wrapper flex justify-center">
          <div className="team-card-links">
            <span className="team-card-misc flex flex-wrap gap-2 items-start">
              <a
                href={member.LinkedIn_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={member.Twitter_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={member.Google_Scholar_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href={member.GitHub_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded-full border border-gray-300 text-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
        </div>
        <div className="team-card-learn-more text-center mt-4">
          <a className="text-blue-500 text-sm hover:text-blue-600 transition-all duration-300 ease-in-out">
            Learn More <span className="arrow ml-1">→</span>
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
