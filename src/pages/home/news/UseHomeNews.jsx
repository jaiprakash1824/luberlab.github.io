import { useContext } from "react";
import { HomeNewsContext } from "../../../context/HomeNewsContext";

export const useHomeNews = () => {
  return useContext(HomeNewsContext);
};
