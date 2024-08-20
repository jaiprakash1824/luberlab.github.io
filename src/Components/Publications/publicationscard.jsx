// Card.js
import "./publicationscard.css";
import CsvReader from "./CsvReader";
import ResHeader from "./ResHeader";

const Publicationscard = () => {
  return (
    <div className="Publish">
      <ResHeader/>
      <CsvReader />
    </div>
  );
};

export default Publicationscard;
