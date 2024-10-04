import ContactButton from "../../../components/header/ContactButton";
import TitleSection from "../../../components/titleSection/TitleSection"; // Import TitleSection
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.BASE_URL;
const teamMembers = [
  {
    name: "Dr Jacob Luber",
    role: "Director, HDSL",
    imgSrc: baseURL + "assets/images/jacob.jpg",
  },
  {
    name: "Helen Shang",
    role: "Visiting Assistant Professor",
    imgSrc: baseURL + "assets/images/shang.jpeg",
  },
];

const Team = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/team");
  };

  return (
    <div className="text-center bg-black min-h-screen flex flex-col justify-center items-center">
      <TitleSection titleText="TEAM" />
      {/* Use TitleSection here */}
      <div className="flex flex-wrap justify-center gap-8 py-8">
        {teamMembers.map((member, index) => (
          <div className="flex flex-col items-center max-w-[200px]" key={index}>
            <img
              src={member.imgSrc}
              alt={member.name}
              className="rounded-[25%] w-full h-[200px] mb-4 object-cover"
            />
            <h2 className="text-white text-lg font-bold">{member.name}</h2>
            <p className="text-white text-base">{member.role}</p>
          </div>
        ))}
      </div>
      <ContactButton title={"SEE MORE"} onClick={handleSeeMoreClick} />
    </div>
  );
};

export default Team;
