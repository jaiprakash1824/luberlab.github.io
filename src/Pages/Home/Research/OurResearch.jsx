import "./OurResearch.css";
import {
  FaBrain,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaDna,
  FaVrCardboard,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

const researchItems = [
  { icon: <GiHealthNormal />, title: "Health Systems at Scale" },
  { icon: <FaUserMd />, title: "AI for Medical Imaging" },
  { icon: <FaMicroscope />, title: "Computational Microbiology" },
  { icon: <FaHospital />, title: "Computational Oncology" },
  { icon: <FaBrain />, title: "Gen AI" },
  { icon: <FaDna />, title: "Population Genetics" },
  { icon: <FaMicroscope />, title: "Digital Pathology" },
  { icon: <FaVrCardboard />, title: "VR/ HCI" },
];

const OurResearch = () => {
  return (
    <div className="research-container">
      <div>
        <h1>Our Research</h1>
      </div>
      <div className="research-items ">
        {researchItems.map((item, index) => (
          <div className="research-item" key={index}>
            <div className="research-icon ">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurResearch;
