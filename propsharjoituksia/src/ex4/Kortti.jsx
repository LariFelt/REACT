import React from 'react'
import Button from "./Button"
const Kortti = ({korttiTeksti, painikeTeksti, kasittelePainallus}) => {
  return (
    <div>
      <h1>{korttiTeksti}</h1>
      <Button painikeTeksti = {painikeTeksti} kasittelePainallus = {kasittelePainallus}/>
    </div>
  )
}

export default Kortti