// Category.jsx
import PropTypes from "prop-types";
import "./Category.css";
import { useEffect, useState } from "react";
import NewCard from "./new_card"; // Use the correct import for new_card

// Dynamically import all images
const images = import.meta.glob("../../utilities/images/*.{png,jpg,jpeg,svg}");

const getImageUrl = async (imageName) => {
  const imageKey = `../../utilities/images/${imageName}`;
  if (images[imageKey]) {
    const module = await images[imageKey]();
    return module.default;
  }
  return null;
};

const Category = ({ title, members }) => {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const urls = {};
      for (const member of members) {
        const url = await getImageUrl(member.image);
        urls[member.image] = url;
      }
      setImageUrls(urls);
    };
    loadImages();
  }, [members]);

  return (
    <div className="category-team">
      <h2 className="category-title-team">{title}</h2>
      {/* <div className="cover-wrapper-team"> */}
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
            imageUrl={imageUrls[member.image]}
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
