// Card.js
import { useContext } from "react";
import PropTypes from "prop-types";
import "./card.css";
import { CardContext } from "./CardContext";
import Category from "./Category";
// import ParallaxSection from "./ParallaxSection";
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
  members: PropTypes.array.isRequired,
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
