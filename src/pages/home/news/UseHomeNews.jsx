import { useContext } from "react";
import { HomeNewsContext } from "./HomeNewsContext";

export const useHomeNews = () => {
  return useContext(HomeNewsContext);
};
