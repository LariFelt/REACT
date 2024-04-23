import React from "react";
import "../App.css";
const Lomake = () => {
  const [enimi, setEnimi] = React.useState("");
  const [snimi, setSnimi] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [h1text, setH1Text] = React.useState("");

  function naytaEtunimi(e) {
    setEnimi(e.target.value);
  }
  function naytaSukunimi(e) {
    setSnimi(e.target.value);
  }
  function naytaEmail(e) {
    setEmail(e.target.value);
  }
  function kasitteleLahetys(e) {
    e.preventDefault();
    setH1Text(`Etunimi: ${enimi} \nSukunimi: ${snimi} \nSähköposti: ${email}`);
    setEnimi("");
    setSnimi("");
    setEmail("");
  }
  return (
    <div>
      <form onSubmit={kasitteleLahetys}>
        <label htmlFor="etunimi">Etunimi:</label>
        <input type="text" onInput={naytaEtunimi} value={enimi} />
        <br />
        <label htmlFor="sukunimi">Sukunimi:</label>
        <input type="text" onInput={naytaSukunimi} value={snimi} />
        <br />
        <label htmlFor="email">Sähköposti:</label>
        <input type="text" onInput={naytaEmail} value={email} />
        <br />
        <button type="submit">Lähetä</button>
        <br />
      </form>
      <h1 className="fix">
        {/*{enimi} {snimi} {email}*/}
        {h1text}
      </h1>
    </div>
  );
};

export default Lomake;
