import CategorySection from "./CategorySection";
import "./DirectorPostDocSection.css";

// eslint-disable-next-line react/prop-types
const DirectorPostDocSection = ({ directorMembers, postDocMembers }) => {
  return (
    <div className="director-postdoc-section">
      <div className="director-content">
        <CategorySection title="Director" members={directorMembers} />
      </div>
      <div className="postdoc-content">
        <CategorySection title="Post Doc" members={postDocMembers} />
      </div>
    </div>
  );
};

export default DirectorPostDocSection;
