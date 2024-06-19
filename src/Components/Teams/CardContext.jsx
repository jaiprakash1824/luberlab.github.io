// import { createContext, useState, useEffect } from "react";
// import Papa from "papaparse";

// export const CardContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const CardProvider = ({ children }) => {
//   const [cards, setCards] = useState({
//     lead: [],
//     postDoc: [],
//     phd: [],
//     masters: [],
//   });

//   useEffect(() => {
//     Papa.parse("/assets/team_members_updated.csv", {
//       download: true,
//       header: true,
//       skipEmptyLines: true,
//       complete: (results) => {
//         const categorizedData = {
//           lead: results.data.filter((card) => card.category === "Lead"),
//           postDoc: results.data.filter((card) => card.category === "Post Doc"),
//           phd: results.data.filter((card) => card.category === "PhD"),
//           masters: results.data.filter((card) => card.category === "Masters"),
//         };
//         setCards(categorizedData);
//       },
//     });
//   }, []);

//   return (
//     <CardContext.Provider value={{ cards, setCards }}>
//       {children}
//     </CardContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";
import YAML from "js-yaml";

export const CardContext = createContext();

// Function to fetch and parse YAML file
const fetchYAML = async (url) => {
  const response = await fetch(url);
  const text = await response.text();
  return YAML.load(text);
};

// eslint-disable-next-line react/prop-types
export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState({
    lead: [],
    postDoc: [],
    phd: [],
    masters: [],
    undergrad: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchYAML("/assets/members.yml");

        const categorizedData = {
          lead: data.filter((card) => card.Degree === "Director"),
          postDoc: data.filter((card) => card.Degree === "PostDoc"),
          phd: data.filter((card) => card.Degree === "PHD"),
          undergrad: data.filter((card) => card.Degree === "Undergraduate"),
          masters: data.filter((card) => card.Degree === "Masters"),
        };

        setCards(categorizedData);
      } catch (error) {
        console.error("Error fetching YAML data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
