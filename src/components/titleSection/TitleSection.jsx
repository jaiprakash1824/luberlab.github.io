import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const TitleSection = ({ titleText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const sectionElement = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Toggle visibility when the element enters or leaves the viewport
      },
      { threshold: 0.5 } // Adjust the threshold as needed (0.5 means 50% of the element must be visible)
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <div className="relative text-center overflow-hidden" ref={titleRef}>
      <h1
        className={`relative font-black text-white text-[clamp(3rem,10vw,5em)] transform ${
          isVisible ? "animate-slideUp" : "animate-slideDown"
        } transition-transform duration-800 ease-in-out`}
      >
        {titleText}
      </h1>

      {/* Solid block behind the title */}
      <div className="absolute inset-0 bg-transparent"></div>
    </div>
  );
};

TitleSection.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default TitleSection;
