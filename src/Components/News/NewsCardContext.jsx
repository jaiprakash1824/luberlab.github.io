import { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

export const CardContext = createContext();
const baseURL = import.meta.env.BASE_URL;

// eslint-disable-next-line react/prop-types
export const NewsCardContext = ({ children }) => {
  const [cards, setCards] = useState([]); // Initialize as an array

  useEffect(() => {
    Papa.parse(`${baseURL}news.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data.map((item) => ({
          date: item.date, // Keep date as a string
          content: item.content,
          link: item.link,
        }));
        setCards(parsedData); // Set parsed data to state
      },
    });
  }, []);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
