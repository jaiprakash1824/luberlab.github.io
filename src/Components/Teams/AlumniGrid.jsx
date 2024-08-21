import { useEffect, useState } from "react";
import Papa from "papaparse";
import "./AlumniGrid.css";

const AlumniGrid = () => {
  const baseURL = import.meta.env.BASE_URL;
  const [alumni, setAlumni] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const getImageUrl = (imageName) => {
    if (!imageName || imageName.trim() === "") {
      return `${baseURL}/assets/data/images/missing.png`;
    }
    return `${baseURL}/assets/data/images/${imageName}`;
  };

  useEffect(() => {
    Papa.parse(`${baseURL}/assets/alumni.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setAlumni(results.data);
      },
    });
  }, [baseURL]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="alumni-section">
      <div className="alumni-header" onClick={toggleCollapse}>
        Alumni {isCollapsed ? "▽" : "△"}
      </div>
      <div className={`alumni-grid ${isCollapsed ? "collapsed" : ""}`}>
        {alumni.map((member, index) => (
          <div key={index} className="alumni-card">
            <img
              src={getImageUrl(member.Photo)}
              alt={member.Name}
              className="alumni-photo"
            />
            <div className="alumni-info">
              <h3>{member.Name}</h3>
              <p>{member.Designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniGrid;
