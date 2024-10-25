import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScrollSection = ({ mainText, nextSectionRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure smooth transition
  }, []);

  const handleScrollToNextSection = () => {
    if (nextSectionRef?.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-black text-center text-white relative h-screen w-full snap-start">
      {/* Slide Up/Down Animation */}
      <div
        className={`relative text-center transform transition-all duration-500 ${
          isVisible ? "animate-slideUp" : "animate-slideDown"
        }`}
      >
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white">
          {mainText}
        </h1>
      </div>

      {/* Block element initially covering text */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-black z-10"></div>

      {/* Scroll indicator with bounce animation */}
      <div
        className="absolute bottom-5 text-2xl text-white animate-bounce cursor-pointer"
        onClick={handleScrollToNextSection}
      >
        &#x21E3;
      </div>
    </div>
  );
};

ScrollSection.propTypes = {
  mainText: PropTypes.string.isRequired,
  nextSectionRef: PropTypes.object.isRequired, // Reference to the next section to scroll to
};

export default ScrollSection;
