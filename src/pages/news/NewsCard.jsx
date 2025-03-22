import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const hasLink = !!news.link;

  // Fallback to a random placeholder if no image is provided
  const imageSrc = news.image
    ? news.image
    : "https://picsum.photos/600/400?random";

  return (
    <div
      className="
        group
        w-full
        h-[360px]
        border border-gray-300
        rounded-md
        overflow-hidden
        transition-all duration-300
        hover:border-blue-500
        cursor-pointer
        flex flex-col
      "
    >
      {/* Date at the top */}
      <p className="text-blue-600 font-semibold px-4 pt-4 group-hover:text-blue-700">
        {news.date}
      </p>

      {/* Image Container with a fixed aspect ratio */}
      <div
        className="
          relative
          flex-shrink-0
          transition-all duration-300
          group-hover:h-24
          h-40
          px-4 mt-2
          aspect-w-16 aspect-h-9
          overflow-hidden
        "
      >
        <img
          src={imageSrc}
          alt={news.title}
          className="
            absolute
            top-0 left-0
            w-full h-full
            object-cover
          "
        />
      </div>

      <hr className="border-gray-200 my-2 mx-4" />

      {/* Text container */}
      <div className="px-4 pb-4 flex-1 relative overflow-hidden">
        {/* Short text by default */}
        <p className="text-gray-700 group-hover:hidden">
          {news.content.length > 60
            ? `${news.content.substring(0, 60)}...`
            : news.content}
        </p>

        {/* Full text on hover */}
        <p className="text-gray-700 hidden group-hover:block">{news.content}</p>

        {/* "Click for more" if link is present, only on hover */}
        {hasLink && (
          <div className="hidden group-hover:flex justify-end mt-2">
            <span className="text-blue-600 text-sm">Click for more</span>
          </div>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string, // Optional
    image: PropTypes.string, // Optional
  }).isRequired,
};

export default NewsCard;
