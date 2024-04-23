import React from "react";

const Painike = ({ setTeksti, teksti }) => {
  function kasittelePainallus() {
    if (teksti == "Logged In") {
      setTeksti("Logged Out");
    } else {
      setTeksti("Logged In");
    }
  }
  return (
    <div>
      <button onClick={kasittelePainallus}>Toggle Login</button>
    </div>
  );
};

export default Painike;
