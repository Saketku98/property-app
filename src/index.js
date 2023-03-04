import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PropertyContextProvider from "./PropertyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PropertyContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PropertyContextProvider>
);
