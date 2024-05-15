import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=fi")
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.results[0]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!person) {
    return <div>Lataa... </div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{`${person.name.first} ${person.name.last}`}</h1>
        {person && (
          <div>
            <img
              src={person.picture.large}
              alt={`${person.name.first} ${person.name.last}`}
            />
            <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
            <p>{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;