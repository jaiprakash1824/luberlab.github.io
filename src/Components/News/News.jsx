import "./News.css";
import { CardProvider } from "../../Components/News/NewsCardContext.jsx";
import Card from "../../Components/News/NewsCard.jsx";
// import CoverCard from "./temp";

const News = () => {
  return (
    <CardProvider>
      <div className="wrapper-class-news">
        <Card />
      </div>
    </CardProvider>
    // <div className="temp">
    //   <CoverCard />
    // </div>
  );
};

export default News;
