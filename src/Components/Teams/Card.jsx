import { useContext } from "react";
import PropTypes from "prop-types";
import "./card.css";
import { CardContext } from "./CardContext";
import Category from "./Category";
import Carousel from "./TeamCarousel";
import AlumniSection from "./AlumniSection";

// Define the CategorySection component
const CategorySection = ({ title, members }) => (
  <div className="content-section">
    <Category title={title} members={members} />
  </div>
);

CategorySection.propTypes = {
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

const Card = () => {
  const { cards } = useContext(CardContext);

  return (
    <div>
      <Carousel />
      <CategorySection title="Director" members={cards.lead} />
      <CategorySection title="Post Doc" members={cards.postDoc} />
      <CategorySection title="PhD" members={cards.phd} />
      <CategorySection title="Masters" members={cards.masters} />
      <CategorySection title="Undergraduate" members={cards.undergrad} />

      <div className="content-section">
        <AlumniSection />
      </div>
      <div className="content-section">
        <h2>Join Us</h2>
        <p>
          We are always looking for talented individuals to join our team. Reach
          out to us for more information.
        </p>
      </div>
    </div>
  );
};

export default Card;
