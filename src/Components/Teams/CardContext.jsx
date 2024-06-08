import { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

export const CardContext = createContext();

// eslint-disable-next-line react/prop-types
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState({
    lead: [],
    postDoc: [],
    phd: [],
    masters: [],
  });

  useEffect(() => {
    Papa.parse("/team_members_updated.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const categorizedData = {
          lead: results.data.filter((card) => card.category === "Lead"),
          postDoc: results.data.filter((card) => card.category === "Post Doc"),
          phd: results.data.filter((card) => card.category === "PhD"),
          masters: results.data.filter((card) => card.category === "Masters"),
        };
        setCards(categorizedData);
      },
    });
  }, []);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
