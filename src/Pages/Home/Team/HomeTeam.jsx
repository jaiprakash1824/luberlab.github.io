import "./HomeTeam.css";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.BASE_URL;
const teamMembers = [
  {
    name: "Dr Jacod Luber",
    role: "Director, HDSL",
    imgSrc: baseURL + "assets/data/images/jacob.jpg",
  },
  {
    name: "Helen Shang",
    role: "Visiting Assistant Professor",
    imgSrc: baseURL + "assets/data/images/shang.jpeg",
  },
  {
    name: "Mohammad Nasr",
    role: "Post Doctoral Fellow",
    imgSrc: baseURL + "assets/data/images/nasr.jpg",
  },
];

const Team = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/team");
  };

  return (
    <div className="home-team-container">
      <h1>TEAM</h1>
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
      <button className="home-team-btn" onClick={handleSeeMoreClick}>
        SEE MORE
      </button>
    </div>
  );
};

export default Team;
