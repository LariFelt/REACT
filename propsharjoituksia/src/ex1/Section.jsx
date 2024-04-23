import React from 'react'
import Kappale from './Kappale'
import Otsikko from './Otsikko'
const Section = () => {
  return (
    <div>
        <Otsikko />
      <Kappale teksti="tämä on ensimmäisen tehtävän teksti" />
    </div>
  )
}

export default Section
