import WhatWeDo from "./WhatWeDo/WhatWeDo";
import HomeTopHeading from "./TopVideo/TopHeading";
import HomeTeam from "./team/HomeTeam";
import HomeResearchSection from "./research/HomeResearchSection";
import { HomeNewsCardContext } from "./news/HomeNewsContext";
import HomeNewsCarousel from "./news/HomeNewsCarousel";
import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";

const Home = () => {
  return (
    <div className="flex flex-col m-0 ">
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
