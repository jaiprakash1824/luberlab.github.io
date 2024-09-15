import WhatWeDo from "./WhatWeDo/WhatWeDo";
import HomeTopHeading from "./TopVideo/TopHeading";
import HomeTeam from "./Team/HomeTeam";
import "./Home.css";
import HomeResearchSection from "./Research/HomeResearchSection";
import { HomeNewsCardContext } from "./News/HomeNewsContext";
import HomeNewsCarousel from "./News/HomeNewsCarousel";
import ResponsiveAnimatedPath from "./TopVideo/ResponsiveAnimatedPath";

const Home = () => {
  return (
    <div className="home-body">
      <ResponsiveAnimatedPath />
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
