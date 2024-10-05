import Slider from "react-slick";
import { useHomeNews } from "./UseHomeNews";
import HomeNewsCard from "./HomeNewsCard";
import useWindowSize from "./UseWindowSize";
import TitleSection from "../../../components/titleSection/TitleSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactButton from "../../../components/header/ContactButton";
import { useNavigate } from "react-router-dom";

const HomeNewsCarousel = () => {
  const newsCards = useHomeNews(); // Fetching news cards
  const { width } = useWindowSize(); // Hook for window size

  const navigate = useNavigate();
  const handleSeeMoreClick = () => {
    navigate("/news");
  };

  // Sort news by date, descending
  const sortedNewsCards = newsCards.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Divide news cards into two rows
  const firstRowCards = sortedNewsCards.slice(0, 5);
  const secondRowCards = sortedNewsCards.slice(5, 10);

  // Dynamically determine slides based on screen width
  const slidesToShow = width < 768 ? 1 : width < 1200 ? 2 : 3;

  // Slider settings for the first row (forward scrolling)
  const settingsFirstRow = {
    dots: false,
    infinite: true,
    speed: 8000, // Higher speed for continuous flow
    slidesToShow: slidesToShow,
    slidesToScroll: 0.5, // Small incremental scrolling for smoother flow
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay with no pause
    cssEase: "linear", // Smooth, continuous easing
    pauseOnHover: false,
    arrows: false,
  };

  // Slider settings for the second row (reverse scrolling)
  const settingsSecondRow = {
    ...settingsFirstRow,
    rtl: true, // Reverse direction for the second row
  };

  return (
    <div className=" bg-black py-10 px-4 min-h-screen max-w-full">
      <TitleSection titleText="LAB NEWS" />

      <div className="my-5">
        <Slider {...settingsFirstRow}>
          {firstRowCards.map((news, index) => (
            <div className="flex justify-center" key={index}>
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

      {/* Second row of news cards (reverse direction) */}
      <div className="my-5">
        <Slider {...settingsSecondRow}>
          {secondRowCards.map((news, index) => (
            <div className="flex justify-center" key={index}>
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

      {/* Centered Contact Button */}
      <div className="flex justify-center mt-8">
        <ContactButton title={"SEE MORE"} onClick={handleSeeMoreClick} />
      </div>
    </div>
  );
};

export default HomeNewsCarousel;
