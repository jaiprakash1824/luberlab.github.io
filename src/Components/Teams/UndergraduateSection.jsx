import CategorySection from "./CategorySection"; // Assuming this is the original component used

// eslint-disable-next-line react/prop-types
const UndergraduateSection = ({ undergradMembers }) => {
  return (
    <div className="undergraduate-team-section">
      <CategorySection title="Undergraduate" members={undergradMembers} />
    </div>
  );
};

export default UndergraduateSection;
