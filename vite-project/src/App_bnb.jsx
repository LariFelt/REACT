import Navbar from "../components/Navbar";
import Otsikko from "../components/Otsikko";
import Card from "../components/Card";
import "../src/App.css";
function App() {
  return (
    <>
      <Navbar />
      <Otsikko />
      <Card
        img="katie.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Elämänohjeita Katie Zaferesiltä"
        price={136}
      />
    </>
  );
}

export default App;
