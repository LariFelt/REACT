import Vitsit from "./Vitsit";
import "./App.css";

function App() {
  return (
    <>
      <Vitsit
        kysymys="I got my daughter a fridge for her birthday."
        vastaus="I can't wait to see her face light up when she opens it."
      />
      <Vitsit
        kysymys="How did the hacker escape the police?"
        vastaus="He just ransomware!"
      />
      <Vitsit
        kysymys="Why don't pirates travel on mountain roads?"
        vastaus="Scurvy."
      />
      <Vitsit
        kysymys="Why do bees stay in the hive in the winter?"
        vastaus="Swarm."
      />
      <Vitsit
        kysymys="What's the best thing about Switzerland?"
        vastaus="I don't know, but the flag is a big plus!"
      />
    </>
  );
}

export default App;
