import FourBoxCarousel from "./FourBoxCarousel";

const HeroSection = () => {
  const phrases = [
    "large-scale cancer imaging",
    "computational microbiology",
    "health systems at scale",
  ];

  const handleDiscoverClick = () => {
    const nextSection = document.getElementById("researchSection");
    console.log(nextSection);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-[85%] mx-auto flex flex-col items-start text-left px-4 py-2 sm:py-3">
      <h1 className="font-bold text-[20px] leading-[1.2] sm:text-[24px] sm:leading-[1.2] md:text-[28px] md:leading-[1.2] max-w-3xl mb-2">
        We innovate healthcare
      </h1>
      <h2 className="font-bold text-[20px] leading-[1.2] sm:text-[24px] sm:leading-[1.2] md:text-[28px] md:leading-[1.2] max-w-3xl mb-2">
        by developing tools for
      </h2>
      <div className="mb-2">
        <FourBoxCarousel phrases={phrases} interval={2000} />
      </div>
      <h2 className="font-bold text-[20px] leading-[1.2] sm:text-[24px] sm:leading-[1.2] md:text-[28px] md:leading-[1.2] max-w-3xl mb-2">
        improving patient outcomes
      </h2>
      <h2 className="font-bold text-[20px] leading-[1.2] sm:text-[24px] sm:leading-[1.2] md:text-[28px] md:leading-[1.2] max-w-3xl mb-4">
        and advance drug discovery.
      </h2>
      <p
        onClick={handleDiscoverClick}
        className="cursor-pointer text-[14px] leading-[1.3] sm:text-[16px] sm:leading-[1.4] text-gray-500"
      >
        Discover Impact ↓
      </p>
    </section>
  );
};

export default HeroSection;
