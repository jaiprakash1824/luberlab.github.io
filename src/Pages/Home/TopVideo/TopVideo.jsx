import { useEffect, useState } from "react";
import "./TopVideo.css";

const TopVideo = () => {
  const sentences = [
    "Welcome to the Health Data Science Lab",
    "Advancing Research in Health Data",
    "Empowering Innovations in Health Science",
    "Transforming Data into Health Solutions",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentSentence = sentences[currentSentenceIndex];
      const updatedText = isDeleting
        ? currentSentence.substring(0, text.length - 1)
        : currentSentence.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentSentence) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setSpeed(50); // Speed up deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setSpeed(150); // Reset speed
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, currentSentenceIndex, speed]);

  useEffect(() => {
    const video = document.querySelector(".top-video");
    video.addEventListener("canplaythrough", () => {
      video.play();
    });
  }, []);

  const baseURL = import.meta.env.BASE_URL;

  return (
    <div className="top-video-container">
      <div className="top-video-text">
        <h1>{text}</h1>
        <span className="typewriter-cursor">|</span>
      </div>
      <video className="top-video" autoPlay loop muted>
        <source src={`${baseURL}assets/dna_video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TopVideo;
