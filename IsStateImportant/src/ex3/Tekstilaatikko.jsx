import React from "react";

const Tekstilaatikko = () => {
  const [teksti, setTeksti] = React.useState("");
  function hallitseMuutoksia(e) {
    //console.log(e);
    setTeksti(e.target.value);
  }
  return (
    <div>
      <h1>{teksti}</h1>
      <input type="text" onInput={hallitseMuutoksia} />
    </div>
  );
};

export default Tekstilaatikko;
