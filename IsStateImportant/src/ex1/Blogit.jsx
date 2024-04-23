import React from "react";

const Blogit = () => {
  const [blogit, setBlogit] = React.useState([
    {
      otsikko: "Uusi websaittini",
      sisalto: "Lorem ipsum...",
      tekija: "Jyri",
      id: 1,
    },
    {
      otsikko: "Tervetuloa juhliin",
      sisalto: "Lorem ipsum...",
      tekija: "Ari",
      id: 2,
    },
    {
      otsikko: "Web dev parhaimmat vinkit",
      sisalto: "Lorem ipsum...",
      tekija: "Harri",
      id: 3,
    },
  ]);
  const jutut = blogit.map((blogi) => (
    <div className="blogi-esikatselu" key={blogi.id}>
      <h2>{blogi.otsikko}</h2>
      <p>{blogi.sisalto}</p>
      <p>Kirjoittanut: {blogi.tekija}</p>
    </div>
  ));
  return <div>{jutut}</div>;
};

export default Blogit;
