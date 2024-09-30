import PropTypes from "prop-types";
import ParticleEffect from "./ParticleEffect";

const ResearchCardHome = ({ title, description }) => {
  return (
    <div className="relative w-[300px] h-[400px] m-6 rounded-lg overflow-hidden flex flex-col justify-end bg-white bg-opacity-10 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-[5px] transition-all duration-500 ease-out group">
      {/* Particle Effect in the background */}
      <ParticleEffect />

      {/* Title Section */}
      <div className="absolute top-3 left-5 z-20">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
      </div>

      {/* Content Box to appear on hover */}
      <div className="relative z-10 p-5 bg-slate-500 bg-opacity-100 text-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <p className="text-white text-base font-light">{description}</p>
      </div>
    </div>
  );
};

ResearchCardHome.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResearchCardHome;
