import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./slider.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark", !isDarkTheme);
  }

  let ul = React.createElement(
    "ul",
    {
      className: `planets-list ${isDarkTheme ? "dark" : ""}`,
      style: {
        color: isDarkTheme ? "#66bb6a" : "inherit",
      },
    },
    React.createElement("li", null, "Mercury"),
    React.createElement("li", null, "Venus"),
    React.createElement("li", null, "Earth"),
    React.createElement("li", null, "Mars"),
    React.createElement("li", null, "Jupiter"),
    React.createElement("li", null, "Saturn"),
    React.createElement("li", null, "Uranus"),
    React.createElement("li", null, "Neptune")
  );

  return (
    <div>
      {/* Hello world */}
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div
          className={`slider round ${isDarkTheme ? "dark" : ""}`}
          onClick={changeTheme}
        />
      </label>

      <h1 style={{ color: "#999", fontSize: "19px" }}>Solar system planets</h1>

      {ul}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
