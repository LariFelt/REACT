import "./App.css";
import Humans from "./Humans";
import data from "./data2";

function App() {
  const ihmiset = data.map((human) => {
    return (
      <Humans
        name={human.name}
        email={human.email}
        address={human.address}
        phone={human.phone}
        website={human.website}
      />
    );
  });
  return <div className="kortit">{ihmiset}</div>;
}

export default App;
