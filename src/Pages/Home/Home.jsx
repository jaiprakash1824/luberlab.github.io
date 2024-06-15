import LabNews from "./News/LabNews";
import OurResearch from "./Research/OurResearch";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import TopVideo from "./TopVideo/TopVideo";
import HomeTeam from "./Team/HomeTeam";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <TopVideo />
      <OurResearch />
      <WhatWeDo />
      <LabNews />
      <HomeTeam />
    </div>
  );
};
export default Home;
