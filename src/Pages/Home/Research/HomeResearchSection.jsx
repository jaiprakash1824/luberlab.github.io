import { useEffect, useRef, useState } from "react";
import "./HomeResearchSection.css";
import ResearchCardHome from "./ResearchCardHome";
import TitleSection from "../../../Components/Home/TitleSection";

const researchItems = [
  {
    imagePath: "assets/sample.jpg",
    title: "HEALTH SYSTEMS AT SCALE",
    description:
      "This is some sample description for the research card on the home page to display the text",
  },
  {
    imagePath: "assets/sample.jpg",
    title: "AI FOR MEDICAL IMAGING",
    description:
      "This is some sample description for the research card on the home page to display the text",
  },
  {
    imagePath: "assets/sample.jpg",
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
    <div
      ref={sectionRef}
      className={`home-research-container ${isVisible ? "animate" : ""}`}
    >
      <div className="home-research-header">
        <TitleSection titleText="OUR RESEARCH" isVisible={isVisible} />
        {/* <h1>OUR RESEARCH</h1> */}
      </div>
      <div className="home-research-row">
        {researchItems.map((item, index) => (
          <div className="home-research-card" key={index}>
            <ResearchCardHome
              imageSrc={item.imagePath}
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
