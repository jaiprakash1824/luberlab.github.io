import { NewsCardContext } from "../../Components/News/NewsCardContext";
import NewsCategory from "../../Components/News/NewsCategory";
import "./News.css";

const News = () => {
  return (
    <NewsCardContext>
      <div className="wrapper-class-teams">
        <NewsCategory />
      </div>
    </NewsCardContext>
  );
};

export default News;
