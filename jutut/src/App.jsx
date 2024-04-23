import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function lisaaJuttuja() {
    const uusiJuttu = `Juttu ${things.length + 1}`;
    setThings((prevState) => [...prevState, uusiJuttu]);
  }
  const jutut = things.map((thing) => <p>{thing}</p>);
  return (
    <div>
      <button onClick={lisaaJuttuja}>Add Item</button>
      {jutut}
    </div>
  );
}

export default App;

