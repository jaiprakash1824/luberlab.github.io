import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./IndividualPage.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const IndividualPage = () => {
  const [newsOpen, setNewsOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [publicationOpen, setPublicationOpen] = useState(false);
  const query = useQuery();

  const member = {
    name: query.get("name"),
    image: query.get("image"),
    degree: query.get("degree"),
    role: query.get("role"),
    advisor: query.get("advisor"),
    description: query.get("description"),
    linkedin: query.get("linkedin"),
    twitter: query.get("twitter"),
    scholar: query.get("scholar"),
    github: query.get("github"),
    researchAreas: query.get("researchAreas")
      ? query.get("researchAreas").split(",")
      : [],
    email: query.get("email"),
  };

  if (!member.name) {
    return <div>Member not found</div>;
  }

  return (
    <div className="individual-page">
      <div className="first-section">
        <div className="profile-section">
          <img src={member.image} alt="Profile" className="profile-pic" />

          <p className="designation">
            {member.role}
            <br />
            {member.degree}
          </p>
          <p className="email">
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </p>
          <p className="research-areas">
            Research Areas:
            <br />
            {member.researchAreas.join(", ")}
          </p>
        </div>
        <div className="bio-section">
          <h1>{member.name}</h1>
          <p>{member.description}</p>
          <p>Mentored by {member.advisor}</p>
        </div>
      </div>
      <div className="research-areas">
        <h2>Research Areas</h2>
        <div className="areas">
          {member.researchAreas.map((area) => (
            <div key={area}>{area}</div>
          ))}
        </div>
      </div>
      <div className="other-sections">
        <h2 onClick={() => setNewsOpen(!newsOpen)}>News</h2>
        <div className={`content ${newsOpen ? "show" : ""}`}>
          News content...
        </div>

        <h2 onClick={() => setAchievementsOpen(!achievementsOpen)}>
          Achievements
        </h2>
        <div className={`content ${achievementsOpen ? "show" : ""}`}>
          Achievements content...
        </div>

        <h2 onClick={() => setPublicationOpen(!publicationOpen)}>
          Publication
        </h2>
        <div className={`content ${publicationOpen ? "show" : ""}`}>
          Publication content...
        </div>
      </div>
      <footer>
        <p>We have more people who work around the lab</p>
        <button>Discover our team</button>
      </footer>
    </div>
  );
};

export default IndividualPage;
