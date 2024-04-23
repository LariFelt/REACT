import React from "react";

export default function Laskin() {
  /**
   * Challenge 1: Set up state to track our count (initial value is 0)
   */
  const [laskuri, setLaskuri] = React.useState(0);
  /**
   * Challenge 2: Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */
  function lisaa() {
    setLaskuri((AikaisempiLaskuri) => AikaisempiLaskuri + 1); // laskuri + 1
  }

  function vahenna() {
    setLaskuri((prevLaskuri) => prevLaskuri - 1);
  }

  /* Muista näyttää myös parempi tapa, sekä tavallisena, että nuolifunktiona */
  return (
    <div className="counter">
      <button className="counter--minus" onClick={vahenna}>
        –
      </button>
      <div className="counter--count">
        <h1>{laskuri}</h1>
      </div>
      <button className="counter--plus" onClick={lisaa}>
        +
      </button>
    </div>
  );
}
