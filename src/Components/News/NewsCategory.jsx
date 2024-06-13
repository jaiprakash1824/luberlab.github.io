import { useContext, useEffect } from "react";
import "./NewsCategory.css";
import { CardContext } from "./NewsCardContext";
import NewsList from "./NewsList";

const NewsCategory = () => {
  const { cards } = useContext(CardContext);

  useEffect(() => {
    console.log("Cards in NewsCategory:", cards);
  }, [cards]);

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
