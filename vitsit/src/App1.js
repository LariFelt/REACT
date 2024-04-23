import "./App.css";
import Vitsi from "./Vitsi";
import vitsitData from "./vitsitData";
import "./App.css";
function App() {
  const vitsiElementit = vitsitData.map((vitsi) => {
    return <Vitsi kysymys={vitsi.kysymys} vastaus={vitsi.vastaus} />;
  });
  return <div>{vitsiElementit}</div>;
}

export default App;
