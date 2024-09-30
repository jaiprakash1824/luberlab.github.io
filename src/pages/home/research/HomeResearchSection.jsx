import { useEffect, useRef, useState } from "react";
import ResearchCardHome from "./ResearchCardHome";
import TitleSection from "../../../components/titleSection/TitleSection";

const researchItems = [
  {
    title: "HEALTH SYSTEMS AT SCALE",
    description:
      "This is some sample description for the research card on the home page to display the text",
  },
  {
    title: "AI FOR MEDICAL IMAGING",
    description:
      "This is some sample description for the research card on the home page to display the text",
  },
  {
    title: "COMPUTATIONAL MICROBIOLOGY",
    description:
      "This is some sample description for the research card on the home page to display the text",
  },
];

const HomeResearchSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: [0.1] }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen text-center bg-black ">
      <div>
        <TitleSection titleText="OUR RESEARCH" isVisible={isVisible} />
      </div>
      <div
        className={`flex flex-wrap justify-center items-center transition-transform duration-800 ease-in-out ${
          isVisible
            ? "animate-slideUp opacity-100"
            : "opacity-0 translate-y-[100px]"
        }`}
      >
        {researchItems.map((item, index) => (
          <div
            key={index}
            className={`transition-all transform duration-800 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[100px]"
            } flex-1 min-w-[280px] max-w-[350px] mx-4 my-4`}
          >
            <ResearchCardHome
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeResearchSection;
