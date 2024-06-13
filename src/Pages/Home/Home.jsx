import LabNews from "./News/LabNews";
import OurResearch from "./Research/OurResearch";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import TopVideo from "./TopVideo/TopVideo";

const Home = () => {
  return (
    <div className="home-body">
      <TopVideo />
      <OurResearch />
      <WhatWeDo />
      <LabNews />
    </div>
  );
};
export default Home;
