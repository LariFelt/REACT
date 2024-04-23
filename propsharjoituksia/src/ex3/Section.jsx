import React from 'react'
import Button from './Button'
import Otsikko from './Otsikko'
const Section = ({kasittelePainallus}) => {
  return (
    <div>
      <Otsikko teksti = "Otsikkoteksti"/>
      <Button teksti = "Paina minua!" kasittelePainallus={kasittelePainallus} />
    </div>
  )
}

export default Section
