import React from "react";

const Tekstilaatikko = () => {
  const [teksti, setTeksti] = React.useState("");

  function muutaTekstia(e) {
    setTeksti(e.target.value);
  }
  return (
    <div>
      <h1>{teksti}</h1>
      <input type="text" onInput={muutaTekstia} />
    </div>
  );
};

export default Tekstilaatikko;
