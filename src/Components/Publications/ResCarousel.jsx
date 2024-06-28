import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResCarousel.css";

const ResCarousel = () => {
  const slides = [
    {
      src: "/pexels-markusspiske-1679719.jpg",
      caption: "Innovative Biology Research",
    },
    {
      src: "/pexels-kubiceknov-924824.jpg",
      caption: "Exploring Diverse Biomes",
    },
    {
      src: "/pexels-adrien-olichon-1257089-2387793.jpg",
      caption: "Cutting-Edge Scientific Discoveries",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResCarousel;
