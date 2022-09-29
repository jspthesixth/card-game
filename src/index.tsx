import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/components/app";

const container = document.getElementById("root") as HTMLElement;
const rootElement = createRoot(container);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
