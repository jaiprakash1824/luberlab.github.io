import { useEffect, useRef, useState } from "react";
import TitleSection from "../../../components/titleSection/TitleSection";

const WhatWeDo = () => {
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  const [isVisibleParagraph1, setIsVisibleParagraph1] = useState(false);
  const [isVisibleParagraph2, setIsVisibleParagraph2] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleTitle(true); // Show the title
          setTimeout(() => {
            setIsVisibleParagraph1(true); // Delay for the first paragraph
          }, 500);
          setTimeout(() => {
            setIsVisibleParagraph2(true); // Delay for the second paragraph
          }, 1000);

          // Disconnect observer after triggering the animation once
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
    <div
      ref={sectionRef}
      className={`w-full min-h-screen flex flex-col items-center justify-center py-16 text-white bg-black bg-opacity-90 bg-radial-gradient-to-b from-[#21325C23] to-black ${
        isVisibleTitle ? "animate-slide-up" : ""
      }`}
    >
      <div className="mb-8">
        <TitleSection titleText="WHAT WE DO" isVisible={isVisibleTitle} />
      </div>

      <div className="flex flex-col items-center justify-center w-full text-center space-y-6">
        <p
          className={`transition-transform transform duration-1000 ease-out ${
            isVisibleParagraph1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-xl md:text-2xl lg:text-3xl leading-snug mx-auto w-full md:w-3/4 lg:w-2/3`}
        >
          We study the neurobiology of energy balance. Using cutting-edge
          approaches, we are working to understand the molecular, cellular, and
          circuit mechanisms through which the brain regulates food intake and
          energy expenditure.
        </p>
        <p
          className={`transition-transform transform duration-1000 ease-out delay-500 ${
            isVisibleParagraph2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-xl md:text-2xl lg:text-3xl leading-snug mx-auto w-full md:w-3/4 lg:w-2/3`}
        >
          We are also developing novel technologies to better understand how the
          brain affects changes in behavior and physiology.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
