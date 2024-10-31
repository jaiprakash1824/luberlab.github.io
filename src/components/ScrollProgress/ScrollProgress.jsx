import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScrollProgress = ({ color = "bg-blue-500", height = "h-1" }) => {
  const [scrollProgressValue, setScrollProgressValue] = useState(0);

  // Calculate scroll position as a percentage
  const calculateScrollProgressValue = () => {
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight - winHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgressValue(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgressValue);
    return () =>
      window.removeEventListener("scroll", calculateScrollProgressValue);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 ${height} ${color} z-50`}
      style={{ width: `${scrollProgressValue}%` }}
    ></div>
  );
};

ScrollProgress.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
};

export default ScrollProgress;
