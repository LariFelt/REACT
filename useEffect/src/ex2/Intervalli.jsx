import React from "react";

const Intervalli = () => {
  const [luku, setLuku] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      console.log("Intervallista terveisiä");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  function kasvata() {
    setLuku((prevLuku) => prevLuku + 1);
  }
  return (
    <div>
      <h1>{luku}</h1>
      <button onClick={kasvata}>Kasvata</button>
    </div>
  );
};

export default Intervalli;
