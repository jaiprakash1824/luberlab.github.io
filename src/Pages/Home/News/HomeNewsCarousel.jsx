import Slider from "react-slick";
import { useHomeNews } from "./useHomeNews";
import HomeNewsCard from "./HomeNewsCard";
import useWindowSize from "./useWindowSize"; // Import the hook
import "./HomeNewsCarousel.css";

const HomeNewsCarousel = () => {
  const newsCards = useHomeNews();
  const { width } = useWindowSize(); // Get window width

  // Sort news by date, descending
  const sortedNewsCards = newsCards.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // First row is the top 5 cards, second row is the next 5
  const firstRowCards = sortedNewsCards.slice(0, 5);
  const secondRowCards = sortedNewsCards.slice(5, 10);

  // Set the number of slides to show based on the screen width
  const slidesToShow = width < 1200 ? 1 : 3;

  // Settings for the first row carousel
  const settingsFirstRow = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: slidesToShow, // Adjust dynamically
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  // Settings for the second row carousel (reverse direction)
  const settingsSecondRow = {
    ...settingsFirstRow,
    rtl: true,
  };

  return (
    <div className="home-news-container">
      <div className="home-news-title">
        <h1>LAB NEWS</h1>
      </div>
      <div className="home-news-carousel-row">
        <Slider {...settingsFirstRow}>
          {firstRowCards.map((news, index) => (
            <div className="home-news-card-wrapper" key={index}>
              <HomeNewsCard
                title={news.title}
                date={news.date}
                content={news.content}
                link={news.link}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="home-news-carousel-row">
        <Slider {...settingsSecondRow}>
          {secondRowCards.map((news, index) => (
            <div className="home-news-card-wrapper" key={index}>
              <HomeNewsCard
                title={news.title}
                date={news.date}
                content={news.content}
                link={news.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeNewsCarousel;
