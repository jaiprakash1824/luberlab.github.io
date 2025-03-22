import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FourBoxCarousel = ({ phrases = [], interval = 2000 }) => {
  const [expandedBox, setExpandedBox] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const widths = [
    ["w-[200px] sm:w-[300px]", "w-[25px]", "w-[10px]", "w-[5px]"],
    ["w-[25px]", "w-[200px] sm:w-[300px]", "w-[10px]", "w-[5px]"],
    ["w-[10px]", "w-[25px]", "w-[200px] sm:w-[300px]", "w-[5px]"],
    ["w-[5px]", "w-[10px]", "w-[25px]", "w-[200px] sm:w-[300px]"],
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setExpandedBox((prev) => (prev + 1) % 4);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases, interval]);

  return (
    <div className="flex items-center space-x-1 w-full">
      {[0, 1, 2, 3].map((i) => {
        const boxWidth = widths[expandedBox][i];
        return (
          <div
            key={i}
            className={`
              ${boxWidth}
              h-[60px]
              rounded-[6px]
              bg-custom-gradient
              flex items-center justify-center
              transition-all duration-300 ease-in-out
            `}
          >
            {i === expandedBox && (
              <span className="animate-fadeIn text-white font-semibold px-2">
                {phrases[phraseIndex]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

FourBoxCarousel.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string),
  interval: PropTypes.number,
};

export default FourBoxCarousel;
