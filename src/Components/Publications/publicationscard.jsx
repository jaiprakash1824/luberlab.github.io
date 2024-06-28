// Card.js
import "./publicationscard.css";
import ResCarousel from "./ResCarousel";
import ResHeader from "./ResHeader";
import Research from "./research";

const Publicationscard = () => {
  return (
    <div className="Publish">
      <ResCarousel />
      <ResHeader />
      <Research />
    </div>
  );
};

export default Publicationscard;
