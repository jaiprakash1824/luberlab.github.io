import PropTypes from "prop-types";
import "./NewsList.css";
import NewCardMain from "./NewCardmain.jsx";

const NewsList = ({ members }) => {
  return (
    <div className="category-news">
      <div className="cover-wrapper-news">
        {members.map((member, index) => (
          <NewCardMain key={index} member={member} />
        ))}
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

NewsList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      content: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default NewsList;
