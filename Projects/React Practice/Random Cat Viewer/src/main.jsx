import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cats from "./Cats.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cats />
  </StrictMode>,
);
