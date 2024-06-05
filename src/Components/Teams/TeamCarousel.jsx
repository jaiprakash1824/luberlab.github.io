import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamCarousel.css";

const Carousel = () => {
  const slides = [
    {
      src: "/carousel.webp",
      caption: "Innovative Biology Research",
    },
    {
      src: "/carousel_2.webp",
      caption: "Exploring Diverse Biomes",
    },
    {
      src: "/carousel_3.webp",
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

export default Carousel;
