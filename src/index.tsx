import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkMarketNexira } from "./screens/DarkMarketNexira";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DarkMarketNexira />
  </StrictMode>,
);
