import { useEffect, useRef } from "react";
import "./ResponsiveAnimatedPath.css";

const ResponsiveAnimatedPath = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial stroke values
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }, []);

  return (
    <div className="responsive-animated-path-container">
      <svg
        className="svg-path"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#579CDE" />
            <stop offset="100%" stopColor="#1E3FE6" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M80,0 L80,10 C80,20 80,20 90,20 L100,20"
          stroke="url(#lineGradient)"
          strokeWidth="0.1"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default ResponsiveAnimatedPath;
