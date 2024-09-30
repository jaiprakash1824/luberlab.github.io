import PropTypes from "prop-types";

const TitleSection = ({ titleText, isVisible }) => {
  return (
    <div className="relative text-center overflow-hidden">
      <h1
        className={`relative font-black text-white text-[clamp(3rem,10vw,5em)] transform ${
          isVisible ? "animate-titleSectionSlideUp" : "translate-y-full"
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
  isVisible: PropTypes.bool.isRequired,
};

export default TitleSection;
