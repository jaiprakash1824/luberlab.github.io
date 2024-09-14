import WavesBackground from "./WavesBackground";
import "./TopHeading.css";

const HomeTopHeading = () => {
  return (
    <div className="home-top-heading-container">
      <div className="waves-background-home">
        <WavesBackground />
      </div>
      <div className="home-top-heading-text">
        <h1 className="main-heading">HEALTH</h1>
        <div className="home-sub-heading">
          <h1>DATA</h1>
          <h1>SCIENCE</h1>
          <h1>LAB</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeTopHeading;
