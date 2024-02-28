import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./context/ContextProvider";
import { FilterContextProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
