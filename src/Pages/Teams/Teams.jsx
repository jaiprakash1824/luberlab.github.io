import "./teams.css";
import { CardProvider } from "../../Components/Teams/CardContext.jsx";
import Card from "../../Components/Teams/Card.jsx";
// import CoverCard from "./temp";

const Teams = () => {
  return (
    <CardProvider>
      <div>
        <Card />
      </div>
    </CardProvider>
    // <div className="temp">
    //   <CoverCard />
    // </div>
  );
};

export default Teams;
