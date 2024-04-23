import React from "react";

const Laskuri = () => {
  const [luku, setLuku] = React.useState(0);

  function lisaa() {
    setLuku((prevLuku) => prevLuku + 1);
  }
  function vahenna() {
    setLuku((prevLuku) => prevLuku - 1);
  }
  return (
    <div>
      <button onClick={lisaa}>+</button>
      <h1>{luku}</h1>
      <button onClick={vahenna}>-</button>
    </div>
  );
};

export default Laskuri;
