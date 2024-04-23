import React from "react";

const Painike = ({ setTeksti, teksti }) => {
  function kasittelePainallus() {
    if (teksti == "Olet kirjautunut") {
      setTeksti("Olet uloskirjautunut");
    } else {
      setTeksti("Olet kirjautunut");
    }
  }
  return (
    <div>
      <button onClick={kasittelePainallus}>Toggle login</button>
    </div>
  );
};

export default Painike;
