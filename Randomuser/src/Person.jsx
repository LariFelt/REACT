import React from "react";

const Person = ({ people }) => {
  function formatDate(value) {
    let date = new Date(value);
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const year = date.toLocaleString("default", { year: "numeric" });
    return day + "." + month + "." + year;
  }
  return (
    <div className="grid">
      {people.map((person, index) => (
        <div key={index} className="card">
          <img
            src={person.picture.large}
            alt={`${person.name.first} ${person.name.last}`}
          />
          <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
          <p>{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
          <p>
            {person.email}
            <br />
            Syntymäaika: {formatDate(person.dob.date)}
            <br />
            Puhelin: {person.cell}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Person;