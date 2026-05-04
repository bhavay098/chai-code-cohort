import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Jokes from "./Jokes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Jokes />
  </StrictMode>,
);
