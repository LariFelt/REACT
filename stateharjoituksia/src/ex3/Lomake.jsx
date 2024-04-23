import React from "react";

const Lomake = () => {
  const [etunimi, setEtunimi] = React.useState("");
  const [sukunimi, setSukunimi] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [h2Teksti, setH2Teksti] = React.useState("");

  function kasitteleEnimi(e) {
    setEtunimi(e.target.value);
  }
  function kasitteleSnimi(e) {
    setSukunimi(e.target.value);
  }
  function kasitteleEmail(e) {
    setEmail(e.target.value);
  }
  function tulostaTiedot(e) {
    e.preventDefault();
    console.log(etunimi, sukunimi, email);
    setH2Teksti(`Etunimi: ${etunimi} Sukunimi: ${sukunimi} Email: ${email}`);
  }
  return (
    <div>
      <form onSubmit={tulostaTiedot}>
        <input
          name="enimi"
          type="text"
          placeholder="Etunimi"
          onInput={kasitteleEnimi}
        />
        <input
          name="snimi"
          type="text"
          placeholder="Sukunimi"
          onInput={kasitteleSnimi}
        />
        <input
          name="emali"
          type="text"
          placeholder="Email"
          onInput={kasitteleEmail}
        />
        <button type="submit">Lähetä</button>
        <h2>{h2Teksti}</h2>
      </form>
    </div>
  );
};

export default Lomake;
