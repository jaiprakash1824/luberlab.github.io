import LabNews from "./News/LabNews";
import OurResearch from "./Research/OurResearch";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import HomeTopHeading from "./TopVideo/TopHeading";
import HomeTeam from "./Team/HomeTeam";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <HomeTopHeading />
      <OurResearch />
      <WhatWeDo />
      <LabNews />
      <HomeTeam />
    </div>
  );
};
export default Home;
