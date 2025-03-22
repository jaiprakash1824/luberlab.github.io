import HeroSection from "../hero/HeroSection";
import WavesBackground from "./WavesBackground";

const HomeTopHeading = () => {
  return (
    <div
      className="
        relative
        w-full
        h-[calc(100vh-70px)]
        bg-white
        flex
        flex-col
        justify-center
        items-start
        pl-2      
        pt-4      
        pb-20      
        z-[0]
        overflow-hidden
      "
    >
      <div className="absolute inset-0 z-[-2]">
        <WavesBackground />
      </div>
      <HeroSection />
    </div>
  );
};

export default HomeTopHeading;
