import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ScrollProgress = ({ color = "bg-blue-500", height = "h-1" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll position as a percentage
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight - winHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 ${height} ${color} z-50`}
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
