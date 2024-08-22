import CategorySection from "./CategorySection"; // Assuming this is the original component used

// eslint-disable-next-line react/prop-types
const PhdSection = ({ phdMembers }) => {
  return (
    <div className="phd-team-section">
      <CategorySection title="PhD" members={phdMembers} />
    </div>
  );
};

export default PhdSection;
