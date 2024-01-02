import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { Sidebar } from "./components/sidebar";
import { Experience } from "./components/experience";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Sidebar />
    <Experience />
  </React.StrictMode>
);

reportWebVitals();
