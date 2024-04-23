import React from "react";

const Laskuri = () => {
  const [luku, setLuku] = React.useState(0);
  function kasvata() {
    setLuku((prevLuku) => prevLuku + 1);
    setLuku((prevLuku) => prevLuku + 1);
  }
  return (
    <div>
      <h1>{luku}</h1>
      <button onClick={kasvata}>+</button>
    </div>
  );
};

export default Laskuri;
