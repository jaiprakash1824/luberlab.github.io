import PropTypes from "prop-types";
import "./Category.css";
import { useEffect, useState } from "react";
import NewCard from "./new_card"; // Use the correct import for new_card

const baseURL = import.meta.env.BASE_URL;
const getImageUrl = (imageName) => {
  console.log(baseURL);
  return `${baseURL}assets/data/images/${imageName}`;
};

const Category = ({ title, members }) => {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const loadImages = () => {
      const urls = {};
      for (const member of members) {
        const url = getImageUrl(member.photo);
        urls[member.photo] = url;
      }
      setImageUrls(urls);
    };
    loadImages();
  }, [members]);

  return (
    <div className="category-team">
      <h2 className="category-title-team">{title}</h2>
      <div
        className={`${
          title.toLowerCase() === "masters" || title.toLowerCase() === "phd"
            ? "cover-wrapper-team"
            : "cover-wrapper-team-top"
        }`}
      >
        {members.map((member, index) => (
          <NewCard
            key={index}
            member={member}
            imageUrl={imageUrls[member.photo]}
          />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      Achievements: PropTypes.string,
      Areas_of_Research_Interest: PropTypes.string,
      Bio: PropTypes.string,
      Degree: PropTypes.string,
      Designation: PropTypes.string,
      Dissertation_Committee_Members: PropTypes.string,
      Dissertation_topic: PropTypes.string,
      GitHub_URL: PropTypes.string,
      Google_Scholar_URL: PropTypes.string,
      Graduation_Date: PropTypes.string,
      LinkedIn_URL: PropTypes.string,
      Mentors: PropTypes.string,
      Name: PropTypes.string.isRequired,
      Education: PropTypes.string,
      Research_Category: PropTypes.string,
      Resume_CV: PropTypes.string,
      Twitter_URL: PropTypes.string,
      email: PropTypes.string,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
