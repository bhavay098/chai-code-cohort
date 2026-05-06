import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Quotes from "./Quotes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Quotes />
  </StrictMode>,
);
