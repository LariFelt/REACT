import React from "react";

const Laskuri = () => {
  const [luku, setLuku] = React.useState(0);
  React.useEffect(() => {
    console.log("Komponentti alustettu");
  }, []);
  React.useEffect(() => {
    console.log("Laskurin tila muutettu");
  }, [luku]);
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

export default Laskuri;
