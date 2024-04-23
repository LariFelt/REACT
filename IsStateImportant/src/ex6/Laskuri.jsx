import React from "react";

const Laskuri = () => {
  const [laskuri, setLaskuri] = React.useState(0);
  function kasittelePainallus() {
    // laskuri == 0
    setLaskuri((prevLaskuri) => prevLaskuri + 1); // 0 + 1
    setLaskuri((prevLaskuri) => prevLaskuri + 1); // 1 + 1
  }
  return (
    <div>
      <h1>{laskuri}</h1>
      <button onClick={kasittelePainallus}>+</button>
    </div>
  );
};

export default Laskuri;
