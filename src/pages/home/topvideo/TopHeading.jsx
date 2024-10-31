// import TitleSection from "../../../components/titleSection/TitleSection";
import GlowingText from "./GlowingText";
import WavesBackground from "./WavesBackground";

const HomeTopHeading = () => {
  return (
    <div className="relative w-full h-screen-minus-70 bg-black  flex flex-col justify-center items-center z-[-1] overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0">
        <WavesBackground />
      </div>

      {/* Centered Text */}
      <div className="z-10 flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        {/* <h1 className="text-white font-black text-[clamp(3rem,10vw,6rem)] opacity-0 animate-slideUp">
          HEALTH
        </h1> */}
        {/* <TitleSection titleText={"HEALTH DATA SCIENCE LAB"} /> */}

        <GlowingText
          text="Health Data Science Lab"
          glowColor="#0070f3"
          glowSpread="8px"
        />
        {/* <TitleSection titleText={"DATA SCIENCE LAB"} /> */}

        {/* <h1 className="text-white font-black mx-4 text-[clamp(3rem,10vw,6rem)] opacity-0 animate-slideUp delay-[0.3s]">
          DATA SCIENCE LAB
        </h1> */}
      </div>
    </div>
  );
};

export default HomeTopHeading;
