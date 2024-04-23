import { useState, useEffect } from "react";

function App() {
  const [laskuri, setLaskuri] = useState(0);

  useEffect(() => {
    const satunnainen = Math.floor(Math.random() * 1000);
    const paivita = setInterval(() => {
      console.log(`[${satunnainen}] - päivitys`);
    }, 1000);
    return () => clearInterval(paivita);
    console.log({ satunnainen });
  });

  return (
    <>
      <h1>App</h1>
      <p>{laskuri}</p>
      <button onClick={() => setLaskuri(laskuri + 1)}>Go Upp!</button>
    </>
  );
}

export default App;
