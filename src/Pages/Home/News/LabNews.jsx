import Slider from "react-slick";
import NewsCard from "./NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LabNews.css";

const LabNews = () => {
  const newsData = [
    {
      title:
        "Congratulations to Jai Prakash Veerla on the acceptance of his paper!",
      description:
        '"SpatialVisVR - An Immersive, Multiplexed Medical Image Viewer With Contextual Similar-Patient Search" for presentation at 21st IEEE CIBCB 2024 to be held in Natal, Brazil!',
    },
    {
      title:
        "Congratulations to Jai Prakash Veerla on the acceptance of his paper!",
      description:
        '"SpatialVisVR - An Immersive, Multiplexed Medical Image Viewer With Contextual Similar-Patient Search" for presentation at 21st IEEE CIBCB 2024 to be held in Natal, Brazil!',
    },
    {
      title:
        "Congratulations to Jai Prakash Veerla on the acceptance of his paper!",
      description:
        '"SpatialVisVR - An Immersive, Multiplexed Medical Image Viewer With Contextual Similar-Patient Search" for presentation at 21st IEEE CIBCB 2024 to be held in Natal, Brazil!',
    },
    // Add more news items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="home-lab-news-container">
      <h1>LAB NEWS</h1>
      <Slider {...settings}>
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
          />
        ))}
      </Slider>
      <button className="home-view-all-btn">VIEW ALL</button>
    </div>
  );
};

export default LabNews;
