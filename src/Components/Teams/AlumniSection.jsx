// AlumniSection.js
import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./AlumniSection.css";

const AlumniSection = () => {
  const [alumni, setAlumni] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Papa.parse("/alumni.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setAlumni(results.data);
      },
    });
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="alumni-section">
      <h2 onClick={toggleOpen} className="alumni-header">
        Alumni {isOpen ? "-" : "+"}
      </h2>
      {isOpen && (
        <div className="alumni-list">
          {alumni.map((alum, index) => (
            <div key={index} className="alumni-item">
              <strong>{alum.name}</strong>, {alum.role} – {alum.years}
              <div>Next position: {alum.nextPosition}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlumniSection;
