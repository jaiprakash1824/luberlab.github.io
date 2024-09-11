import { useEffect, useState, useRef } from "react";
import ContactButton from "../../../Components/Header/ContactButton";
import TitleSection from "../../../Components/Home/TitleSection"; // Import TitleSection
import "./HomeTeam.css";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.BASE_URL;
const teamMembers = [
  {
    name: "Dr Jacob Luber",
    role: "Director, HDSL",
    imgSrc: baseURL + "assets/data/images/jacob.jpg",
  },
  {
    name: "Helen Shang",
    role: "Visiting Assistant Professor",
    imgSrc: baseURL + "assets/data/images/shang.jpeg",
  },
];

const Team = () => {
  const navigate = useNavigate();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver to trigger the animation for the title
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true); // Trigger title animation
          observer.disconnect(); // Disconnect observer after triggering
        }
      },
      { threshold: 0.2 }
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

  const handleSeeMoreClick = () => {
    navigate("/team");
  };

  return (
    <div className="home-team-container" ref={sectionRef}>
      <TitleSection titleText="TEAM" isVisible={isTitleVisible} />{" "}
      {/* Use TitleSection here */}
      <div className="home-team-members">
        {teamMembers.map((member, index) => (
          <div className="home-team-member" key={index}>
            <img
              src={member.imgSrc}
              alt={member.name}
              className="home-team-img"
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <ContactButton title={"SEE MORE"} onClick={handleSeeMoreClick} />
    </div>
  );
};

export default Team;
