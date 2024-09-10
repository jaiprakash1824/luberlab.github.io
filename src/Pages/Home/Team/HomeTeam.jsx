import ContactButton from "../../../Components/Header/ContactButton";
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
      <ContactButton title={"SEE MORE"} onClick={handleSeeMoreClick} />
    </div>
  );
};

export default Team;
