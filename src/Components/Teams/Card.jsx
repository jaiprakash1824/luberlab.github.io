// src/components/Card.js
import { useContext } from "react";
import "./card.css";
import { CardContext } from "./CardContext";
import Category from "./Category";

const Card = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="card-container">
      <Category title="Director" members={cards.lead} />
      <Category title="Post Doc" members={cards.postDoc} />
      <Category title="PhD" members={cards.phd} />
      <Category title="Masters" members={cards.masters} />
    </div>
  );
};

export default Card;
