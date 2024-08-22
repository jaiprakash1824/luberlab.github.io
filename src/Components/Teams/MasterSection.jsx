import CategorySection from "./CategorySection";
import "./MasterSection.css";

// eslint-disable-next-line react/prop-types
const MasterSection = ({ masterMembers }) => {
  return (
    <div className="master-team-section">
      <CategorySection title="Master" members={masterMembers} />
    </div>
  );
};

export default MasterSection;
