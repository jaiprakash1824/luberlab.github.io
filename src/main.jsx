import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>{console.log("hey i am inside the website!")}</div>
    <App />
  </StrictMode>
);
