// components/research/ResearchCarousel/ResearchCarouselOne.jsx
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ResearchContext } from '../../context/ResearchContext';

const ResearchCarouselOne = ({ isActive }) => {
  const { research } = useContext(ResearchContext);
  const biosciences = research.sections.biosciences;

  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setIsVisible(false);
      return;
    }

    const sectionElement = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, [isActive]);

  return (
    <div
      className="flex flex-col justify-center items-start w-screen h-screen bg-black text-white px-8 md:px-20"
      ref={titleRef}
    >
      <div className="max-w-3xl space-y-6">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-6 text-white transform transition-transform duration-800 ease-in-out ${
            isVisible ? 'animate-slideUp' : ''
          }`}
        >
          {biosciences.title}
        </h1>
        {biosciences.content.map((paragraph, index) => (
          <p key={index} className="text-justify leading-7 text-gray-200">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResearchCarouselOne;