// AlumniSection.js
import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./AlumniSection.css";

const AlumniSection = () => {
  const [alumni, setAlumni] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const baseURL = import.meta.env.BASE_URL;
  useEffect(() => {
    Papa.parse(`${baseURL}assets/alumni.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setAlumni(results.data);
      },
    });
  }, [baseURL]);

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
