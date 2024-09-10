import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import VanillaTilt from "vanilla-tilt";
import "./ResearchCardHome.css";

const ResearchCardHome = ({ imageSrc, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    VanillaTilt.init(cardElement, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      if (cardElement.vanillaTilt) {
        cardElement.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="research-card" ref={cardRef}>
      <img src={imageSrc} alt={title} className="research-card-image" />
      <div className="research-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ResearchCardHome.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResearchCardHome;
