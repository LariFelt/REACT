import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Kappale from "./ex5/Kappale"
function kasittelePainallus()
{
  console.log("Terveisiä main.jsx:stä")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Kappale teksti="Tämä on kappaleteksti">
      <h1>Tämä löytyy main.jsx:stä</h1>
    </Kappale>
  </React.StrictMode>,
)
