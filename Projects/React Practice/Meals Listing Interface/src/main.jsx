import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Meals from "./Meals.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Meals />
  </StrictMode>,
);
