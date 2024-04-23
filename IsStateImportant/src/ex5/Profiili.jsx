import React from "react";
import Painike from "./Painike";

const Profiili = () => {
  const [teksti, setTeksti] = React.useState("Logged In");
  return (
    <div>
      <p>{teksti}</p>
      <Painike setTeksti={setTeksti} teksti={teksti} />
    </div>
  );
};

export default Profiili;
