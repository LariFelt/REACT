import React from "react";
const Pokemon = () => {
  const [kuva, setKuva] = React.useState("");
  const [nimi, setNimi] = React.useState("");

  React.useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon/mankey")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     const imgURL = data.sprites.other["official-artwork"].front_default;
    //     setKuva(imgURL);
    //     setNimi(data.name);
    //   });

    fetch("https://lumoakatemia.eu/Tehtavat/tours.html")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>{nimi}</h1>
      <img src={kuva} alt="" />
    </div>
  );
};

export default Pokemon;
