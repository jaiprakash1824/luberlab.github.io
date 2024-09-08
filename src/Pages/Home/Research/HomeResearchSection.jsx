import { useEffect, useRef, useState } from "react";
import HomeResearchCard from "./HomeResearchCard";
import "./HomeResearchSection.css";

const researchItems = [
  { imagePath: "assets/sample.jpg", title: "HEALTH SYSTEMS AT SCALE" },
  { imagePath: "assets/sample.jpg", title: "AI FOR MEDICAL IMAGING" },
  { imagePath: "assets/sample.jpg", title: "COMPUTATIONAL MICROBIOLOGY" },
  { imagePath: "assets/sample.jpg", title: "COMPUTATIONAL ONCOLOGY" },
  { imagePath: "assets/sample.jpg", title: "GEN AI" },
  { imagePath: "assets/sample.jpg", title: "POPULATION GENETICS" },
  { imagePath: "assets/sample.jpg", title: "DIGITAL PATHOLOGY" },
  { imagePath: "assets/sample.jpg", title: "VR/ HCI" },
];

const HomeResearchSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the section is visible
        }
      },
      {
        threshold: [0.1, 0.2, 0.3], // Trigger when 20% of the section is visible
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect(); // Cleanup the observer on component unmount or ref change
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`home-research-container ${isVisible ? "animate" : ""}`}
    >
      <div className="home-research-header">
        <h1>OUR RESEARCH</h1>
      </div>
      <div className="home-research-grid">
        {researchItems.map((item, index) => (
          <HomeResearchCard
            key={index}
            imagePath={item.imagePath}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeResearchSection;
