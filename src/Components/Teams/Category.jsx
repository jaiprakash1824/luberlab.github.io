import PropTypes from "prop-types";
import "./Category.css";
import { useEffect, useState, useRef } from "react";
import NewCard from "./new_card";
import TitleSection from "../../Components/Home/TitleSection";

const baseURL = import.meta.env.BASE_URL;
const getImageUrl = (imageName) => {
  return `${baseURL}assets/data/images/${imageName}`;
};

const Category = ({ title, members }) => {
  const [imageUrls, setImageUrls] = useState({});
  const [isTitleVisible, setIsTitleVisible] = useState(false); // State for title visibility
  const sectionRef = useRef(null); // Reference to the section for IntersectionObserver

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

  // IntersectionObserver to trigger the animation for the title
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true); // Trigger title animation
          observer.disconnect(); // Disconnect observer after triggering
        }
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect(); // Clean up the observer
      }
    };
  }, []);

  return (
    <div className="category-team" ref={sectionRef}>
      <TitleSection titleText={title} isVisible={isTitleVisible} />
      <div className="cover-wrapper-team">
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
