import "./TopVideo.css";
import { useEffect } from "react";

const TopVideo = () => {
  useEffect(() => {
    const video = document.querySelector(".top-video");
    video.addEventListener("canplaythrough", () => {
      video.play();
    });
  }, []);

  return (
    <div className="top-video-container">
      <div className="top-video-text">
        <h1>HEALTH</h1>
        <h1>DATA SCIENCE</h1>
        <h1>LAB</h1>
      </div>
      {/* <img className="top-video" src="/dna.gif" alt="DNA Animation" /> */}
      <video className="top-video" autoPlay loop muted>
        <source src="/assets/dna_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TopVideo;
