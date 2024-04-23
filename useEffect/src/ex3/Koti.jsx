import React from "react";
import Lohko from "./Lohko";
const Koti = () => {
  const [luku, setLuku] = React.useState(0);

  function kasvata() {
    setLuku((prevLuku) => prevLuku + 1);
  }

  const id = React.useEffect(() => {
    console.log("Kotisivu on päivitetty");
  });

  return (
    <div>
      <h1>Vierailuita: {luku}</h1>
      <button onClick={kasvata}>+</button>
      <Lohko />
    </div>
  );
};

export default Koti;
