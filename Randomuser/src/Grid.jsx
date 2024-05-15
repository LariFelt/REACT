import React, { useState, useEffect } from "react";
import "./App.css";
import Person from "./Person";

function Grid() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=18&nat=fi&gender=male")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Satunnaisia käyttäjiä</h1>
        <Person people={people} />
      </header>
    </div>
  );
}

export default Grid;