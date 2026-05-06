import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Videos from "./Videos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Videos />
  </StrictMode>,
);
