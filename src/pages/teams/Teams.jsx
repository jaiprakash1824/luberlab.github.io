import ScrollSection from "../../components/ScrollProgress/ScrollSection.jsx";
import { CardProvider, CardContext } from "../../context/TeamContext.jsx";
import ScrollTrapSection from "../../components/teams/ScrollTrapSection.jsx";
import MemberCardSection from "../../components/teams/MemberCardSection.jsx";
import { useRef, useContext } from "react";

const TeamsContent = () => {
  const nextSectionRef = useRef(null);
  const memberSectionRef = useRef(null); // Reference for MemberCardSection
  const { cards } = useContext(CardContext);

  return (
    <div className="snap-y snap-mandatory h-screen-minus-70 overflow-y-scroll">
      {/* Initial Scroll Section */}
      <ScrollSection
        mainText="Welcome to the Lab"
        nextSectionRef={nextSectionRef}
      />

      {/* Director/Postdoc Section */}
      <div ref={nextSectionRef} className="snap-start h-screen">
        <ScrollTrapSection />
      </div>

      {/* Additional member section */}
      <div ref={memberSectionRef} className="snap-end">
        <MemberCardSection title={"PHD"} members={cards.phd} />
        <div className="h-20 bg-black" />
        <MemberCardSection title={"MASTERS"} members={cards.masters} />
        <div className="h-20 bg-black" />
        <MemberCardSection title={"UNDERGRADUATE"} members={cards.undergrad} />
        <div className="h-20 bg-black" />
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <CardProvider>
      <TeamsContent />
    </CardProvider>
  );
};

export default Teams;
