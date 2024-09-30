import WhatWeDo from "./WhatWeDo/WhatWeDo";
import HomeTopHeading from "./TopVideo/TopHeading";
import HomeTeam from "./team/HomeTeam";
import HomeResearchSection from "./research/HomeResearchSection";
// import { HomeNewsCardContext } from "./News/HomeNewsContext";
// import HomeNewsCarousel from "./News/HomeNewsCarousel";

const Home = () => {
  return (
    <div className="flex flex-col m-0 ">
      <HomeTopHeading />
      <HomeResearchSection />
      <WhatWeDo />
      {/*<HomeNewsCardContext>
        <HomeNewsCarousel />
      </HomeNewsCardContext>*/}
      <HomeTeam />
    </div>
  );
};

export default Home;
