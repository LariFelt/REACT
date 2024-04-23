import React from "react";
const Mario = () => {
  const [nimi, setNimi] = React.useState("Mario");
  const [ika, setIka] = React.useState(25);

  const vaihda = () => {
    setNimi("Luigi");
    setIka(30);
  };
  return (
    <div>
      <p>
        {nimi} on {ika} vuotta vanha
      </p>
      <button onClick={vaihda}>Vaihda tiedot</button>
    </div>
  );
};

export default Mario;
