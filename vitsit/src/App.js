import logo from './logo.svg';
import './App.css';
import Vitsi from './Vitsi';
import React from "react"

function App() {
  return (
    <div className="App">
          <Vitsi kysymys="Mik&auml; on laiskuuden huippu?"
              vastaus= "N&auml;kee unta, mutta ei viitsi katsoa" />
          <Vitsi kysymys="Mit&auml; puhelimelle tapahtuu, jos se tippuu parvekkeelta? "
              vastaus= "ei mit&auml;&auml;n, jos siin&auml; on lentotila p&auml;&auml;ll&auml;" />
          <Vitsi kysymys="Mit&auml; vihainen puusepp&auml; teki verstaallaan?"
              vastaus="LaatiKostoa"/>
          <Vitsi kysymys="Kuka eroaa joukosta?"
              vastaus = "Joukon vaimo"/>
          <Vitsi kysymys="Mitä tapahtuu, jos auto ajaa joen yli?"
              vastaus="Joe kuolee"/>
    </div>
  );
}

export default App;
