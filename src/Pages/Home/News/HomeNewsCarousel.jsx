import Slider from "react-slick";
import { useHomeNews } from "./useHomeNews";
import HomeNewsCard from "./HomeNewsCard";
import useWindowSize from "./useWindowSize";
import TitleSection from "../../../Components/Home/TitleSection";
import "./HomeNewsCarousel.css";
import { useEffect, useRef, useState } from "react";

const HomeNewsCarousel = () => {
  const newsCards = useHomeNews();
  const { width } = useWindowSize();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef(null);

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
    slidesToShow: slidesToShow,
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

  // IntersectionObserver to trigger the animation
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true); // Make the title visible when the section is in view
          console.log("I am here");
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the title is in view
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="home-news-container" ref={sectionRef}>
      <TitleSection titleText="LAB NEWS" isVisible={isTitleVisible} />

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
