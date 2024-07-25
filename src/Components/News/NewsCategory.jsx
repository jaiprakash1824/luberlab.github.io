import { useContext } from "react";
import "./NewsCategory.css";
import { CardContext } from "./NewsCardContext";
import NewsList from "./NewsList";

const NewsCategory = () => {
  const { cards } = useContext(CardContext);

  if (!cards || cards.length === 0) {
    // Handle the case when cards are not yet loaded
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NewsList members={cards} />
    </div>
  );
};

export default NewsCategory;
