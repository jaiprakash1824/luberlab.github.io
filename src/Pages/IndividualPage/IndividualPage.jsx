import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./IndividualPage.css";
import { MemberContext } from "../../Components/Teams/MemberContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const IndividualPage = () => {
  const [newsOpen, setNewsOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [publicationOpen, setPublicationOpen] = useState(false);
  const { selectedMember: member } = useContext(MemberContext);
  const navigate = useNavigate();

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="individual-page">
      <div className="first-section">
        <div className="profile-section">
          <img src={member.imageUrl} alt="Profile" className="profile-pic" />

          <p className="designation">
            {member.Designation}
            <br />
            {member.Degree}
          </p>
          <p className="email">
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </p>
          <div className="individual-page-link-wrapper">
            <div className="individual-page-links">
              <span className="individual-page-misc">
                <a
                  href={member.LinkedIn_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={member.Twitter_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href={member.Google_Scholar_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href={member.GitHub_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bio-section">
          <h1>{member.Name}</h1>
          <p>{member.Bio}</p>
          <p>Mentored by {member.Mentors}</p>
        </div>
      </div>
      <div className="research-areas">
        <h2>Research Areas</h2>
        <div className="areas">
          <div>{member.Research_Category}</div>
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
          {member.Achievements}
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
        <button onClick={() => navigate(-1)}>Discover our team</button>
      </footer>
    </div>
  );
};

export default IndividualPage;
