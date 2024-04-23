import React from 'react'
import Kortti from './Kortti'
const Profiili = ({profiiliTeksti, korttiTeksti, painikeTeksti, kasittelePainallus}) => {
  return (
    <div>
        <h2>{profiiliTeksti}</h2>
      <Kortti korttiTeksti={korttiTeksti} painikeTeksti={painikeTeksti} kasittelePainallus={kasittelePainallus}/>
    </div>
  )
}

export default Profiili
