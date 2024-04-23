import React from 'react'

const Button = ({painikeTeksti, kasittelePainallus}) => {
  return (
    <div>
      <button onClick={kasittelePainallus}>{painikeTeksti}</button>
    </div>
  )
}

export default Button