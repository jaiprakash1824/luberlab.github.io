import PropTypes from "prop-types";

const HomeNewsCard = ({ title, date, content, link }) => {
  return (
    <div className="bg-[#1d1b1b] text-white rounded-lg p-5 flex flex-col justify-between h-[300px] mx-5 my-5">
      <div className="mb-2">
        <h3 className="text-xl font-bold uppercase text-white mb-1">
          {title.toUpperCase()}
        </h3>
        <p className="text-sm text-gray-400">{date.toUpperCase()}</p>
      </div>
      <div className="bg-[#131212] border border-[#2c2c2c] p-4 rounded-lg flex-grow overflow-y-hidden">
        <p className="text-white text-base leading-relaxed">
          {content.toUpperCase()}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm mt-3 transition-colors duration-300 hover:bg-blue-700"
        >
          Read More
        </a>
      )}
    </div>
  );
};
// PropTypes validation
HomeNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired, // This was missing
  link: PropTypes.string,
};

export default HomeNewsCard;
