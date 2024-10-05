import { useState } from "react";
import { useHomeNews } from "../home/news/UseHomeNews";
import TitleSection from "../../components/titleSection/TitleSection";
import PropTypes from "prop-types";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";

const NewsPage = () => {
  const cards = useHomeNews();

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <ScrollProgress />
      <section className="mb-12 text-center">
        <TitleSection titleText="LAB NEWS" />
        {/* TitleSection Reused */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
          Stay updated with the latest news, achievements, and milestones from
          our lab.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid gap-8 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </section>
    </div>
  );
};

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle text expansion

  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-40 bg-gray-700 flex items-center justify-center">
        <img
          src="src/assets/sample.jpg" // Placeholder for your image
          alt={news.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-blue-400 font-semibold mb-2">{news.date}</p>
        <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
        <p className="text-gray-300 mb-4">
          {isExpanded ? news.content : `${news.content.substring(0, 100)}...`}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-blue-400 hover:underline focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};
export default NewsPage;
