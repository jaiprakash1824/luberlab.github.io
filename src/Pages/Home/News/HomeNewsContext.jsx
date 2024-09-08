import { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

const baseURL = import.meta.env.BASE_URL;
export const HomeNewsContext = createContext();

// eslint-disable-next-line react/prop-types
export const HomeNewsCardContext = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Papa.parse(`${baseURL}news.csv`, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data.map((item) => ({
          date: item.date,
          title: item.title,
          content: item.content,
          link: item.link || null,
        }));
        setCards(parsedData);
      },
    });
  }, []);

  return (
    <HomeNewsContext.Provider value={cards}>
      {children}
    </HomeNewsContext.Provider>
  );
};
