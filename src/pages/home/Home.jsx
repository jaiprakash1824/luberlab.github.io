import WhatWeDo from "./whatwedo/WhatWeDo";
import HomeTopHeading from "./topvideo/TopHeading";
import HomeTeam from "./team/HomeTeam";
import HomeResearchSection from "./research/HomeResearchSection";
import { HomeNewsCardContext } from "../../context/HomeNewsContext";
import HomeNewsCarousel from "./news/HomeNewsCarousel";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";

const Home = () => {
  return (
    <div className="flex flex-col m-0 overflow-x-hidden ">
      <ScrollProgress />
      <HomeTopHeading />
      <HomeResearchSection />
      <WhatWeDo />
      <HomeNewsCardContext>
        <HomeNewsCarousel />
      </HomeNewsCardContext>
      <HomeTeam />
    </div>
  );
};

export default Home;
