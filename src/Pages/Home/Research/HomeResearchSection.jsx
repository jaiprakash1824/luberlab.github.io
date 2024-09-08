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
  return (
    <div className="home-research-container">
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
