import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Laskin from "./Laskin.jsx";
import Mario from "./ex2/Mario.jsx";
import Blogit from "./ex1/Blogit.jsx";
import Tekstilaatikko from "./ex3/Tekstilaatikko.jsx";
import Lomake from "./ex4/Lomake.jsx";
import Profiili from "./ex5/Profiili.jsx";
import Laskuri from "./ex6/Laskuri.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Laskuri />
  </React.StrictMode>
);
