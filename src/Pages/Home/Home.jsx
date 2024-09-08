import LabNews from "./News/LabNews";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import HomeTopHeading from "./TopVideo/TopHeading";
import HomeTeam from "./Team/HomeTeam";
import "./Home.css";
import HomeResearchSection from "./Research/HomeResearchSection";

const Home = () => {
  return (
    <div className="home-body">
      <HomeTopHeading />
      <HomeResearchSection />
      <WhatWeDo />
      <LabNews />
      <HomeTeam />
    </div>
  );
};
export default Home;
