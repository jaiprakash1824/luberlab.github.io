import { useContext } from "react";
import "./card.css";
import { CardContext } from "./CardContext";
import DirectorPostDocSection from "./DirectorPostDocSection";
import PhdSection from "./PhdSection";
import MasterSection from "./MasterSection";
import UndergraduateSection from "./UndergraduateSection";
import AlumniGrid from "./AlumniGrid";

const Card = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="team-wrapper">
      <DirectorPostDocSection
        directorMembers={cards.lead}
        postDocMembers={cards.postDoc}
      />
      <PhdSection phdMembers={cards.phd} />
      <MasterSection masterMembers={cards.masters} />
      <UndergraduateSection undergradMembers={cards.undergrad} />

      <div className="alumni-section-team">
        <AlumniGrid />
      </div>

      <div className="content-section">
        <h2>Join Us</h2>
        <p>
          We are always looking for talented individuals to join our team. Reach
          out to us for more information.
        </p>
      </div>
    </div>
  );
};

export default Card;
