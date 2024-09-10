import { useEffect, useRef, useState } from "react";
import "./WhatWeDo.css";

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
      className={`what-we-do-container ${
        isVisibleTitle ? "animate-slide-up" : ""
      }`}
      ref={sectionRef}
    >
      <div className="what-we-do">
        <h2 className={isVisibleTitle ? "animate-slide-up" : ""}>What We Do</h2>
        <p
          className={
            isVisibleParagraph1 ? "paragraph-1 animate-slide-up" : "paragraph-1"
          }
        >
          We study the neurobiology of energy balance. Using cutting-edge
          approaches, we are working to understand the molecular, cellular, and
          circuit mechanisms through which the brain regulates food intake and
          energy expenditure.
        </p>
        <p
          className={
            isVisibleParagraph2 ? "paragraph-2 animate-slide-up" : "paragraph-2"
          }
        >
          We are also developing novel technologies to better understand how the
          brain affects changes in behavior and physiology.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
