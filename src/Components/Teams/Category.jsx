// import React from "react";
import PropTypes from "prop-types";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Dynamically import all images
const images = import.meta.glob("../../utilities/images/*.{png,jpg,jpeg,svg}");

const getImageUrl = (imageName) => {
  const imageKey = `../../utilities/images/${imageName}`;
  return images[imageKey] ? images[imageKey]() : null;
};

const Category = ({ title, members }) => {
  const isLeadCategory = title === "Director" || title === "Post Doc";

  return (
    <div className={`category ${isLeadCategory ? "lead-category" : ""}`}>
      <h2 className="category-title">{title}</h2>
      <div className="category-cards">
        {members.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-image-container">
              {getImageUrl(member.image) ? (
                <img
                  src={getImageUrl(member.image)}
                  alt={member.name}
                  className="card-image"
                />
              ) : (
                <p>Image not found</p>
              )}
            </div>
            <h2 className="card-title">{member.name}</h2>
            <div className="card-info">
              <p className="card-degree">{member.degree}</p>
              <p className="card-role">{member.role}</p>
            </div>
            <p className="card-advisor">Advisor: {member.advisor}</p>
            <p className="card-description">{member.description}</p>
            <div className="card-links">
              <a href={member.linkedin} className="card-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={member.twitter} className="card-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={member.scholar} className="card-link">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href={member.github} className="card-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default Category;
