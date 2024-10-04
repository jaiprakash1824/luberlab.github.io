import { useEffect, useRef, useState } from "react";
import TitleSection from "../../../components/titleSection/TitleSection";

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState({
    paragraph1: false,
    paragraph2: false,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible({ paragraph1: true });
          setTimeout(
            () => setIsVisible((prev) => ({ ...prev, paragraph2: true })),
            500
          );
          observer.disconnect(); // Stop observing after it’s visible once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionElement) observer.observe(sectionElement);

    return () => sectionElement && observer.disconnect(); // Clean up the observer
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 text-white bg-black bg-opacity-90 bg-radial-gradient-to-b from-[#21325C23] to-black text-justify"
    >
      <TitleSection titleText="WHAT WE DO" />

      <div className="mt-8 text-center space-y-6 w-full md:w-3/4 lg:w-2/3">
        <p
          className={`transition-transform transform duration-1000 ease-out ${
            isVisible.paragraph1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-xl md:text-2xl lg:text-3xl leading-snug`}
        >
          We study the neurobiology of energy balance. Using cutting-edge
          approaches, we aim to understand the molecular, cellular, and circuit
          mechanisms through which the brain regulates food intake and energy
          expenditure.
        </p>

        <p
          className={`transition-transform transform duration-1000 ease-out delay-500 ${
            isVisible.paragraph2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } text-xl md:text-2xl lg:text-3xl leading-snug`}
        >
          We are also developing novel technologies to better understand how the
          brain affects behavior and physiology.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
