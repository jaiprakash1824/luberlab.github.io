import "./HomeTeam.css";

const teamMembers = [
  {
    name: "Person 1",
    role: "PhD In XYZ\nDoing abcd",
    imgSrc: "src/utilities/images/veerla.jpg",
  },
  {
    name: "Person 2",
    role: "PhD In XYZ\nDoing ABCD",
    imgSrc: "src/utilities/images/veerla.jpg",
  },
  {
    name: "Person 3",
    role: "PhD In XYZ\nDoing ABCD",
    imgSrc: "src/utilities/images/veerla.jpg",
  },
];

const Team = () => {
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
      <button className="home-team-btn">SEE MORE</button>
    </div>
  );
};

export default Team;
