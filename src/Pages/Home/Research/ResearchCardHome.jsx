import PropTypes from "prop-types";
import "./ResearchCardHome.css";
import ParticleEffect from "./ParticleEffect";

const ResearchCardHome = ({ title, description }) => {
  return (
    <div className="research-card">
      <ParticleEffect />
      <div className="research-card-title">
        <h3>{title}</h3>
      </div>
      <div className="research-card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

ResearchCardHome.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResearchCardHome;
