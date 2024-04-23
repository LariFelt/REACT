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
// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"];

//   function lisaaJuttu() {
//     thingsArray.push("Juttu 3");
//   }
//   console.log(thingsArray);
//   /**
//    * Challenge: Map over the thingsArray to generate
//    * a <p> element for each item and render them on the page
//    * below the button
//    */
//   const jutut = thingsArray.map((juttu) => <p>{juttu}</p>);
//   return (
//     <div>
//       <button onClick={lisaaJuttu}>Add Item</button>
//       {jutut}
//     </div>
//   );
// }

// export default App;
