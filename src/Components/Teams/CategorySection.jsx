import PropTypes from "prop-types";
import Category from "./Category";
const CategorySection = ({ title, members }) => (
  <div className="content-section-category-section">
    <Category title={title} members={members} />
  </div>
);

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      Achievements: PropTypes.string,
      Areas_of_Research_Interest: PropTypes.string,
      Bio: PropTypes.string,
      Degree: PropTypes.string,
      Designation: PropTypes.string,
      Dissertation_Committee_Members: PropTypes.string,
      Dissertation_topic: PropTypes.string,
      GitHub_URL: PropTypes.string,
      Google_Scholar_URL: PropTypes.string,
      Graduation_Date: PropTypes.string,
      LinkedIn_URL: PropTypes.string,
      Mentors: PropTypes.string,
      Name: PropTypes.string.isRequired,
      Education: PropTypes.string,
      Research_Category: PropTypes.string,
      Resume_CV: PropTypes.string,
      Twitter_URL: PropTypes.string,
      email: PropTypes.string,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CategorySection;
