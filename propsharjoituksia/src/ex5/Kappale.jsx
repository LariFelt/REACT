import React from 'react'

const Kappale = ({teksti, children}) => {
  return (
    <div>
      {children}
      <p>{teksti}</p>
    </div>
  )
}
export default Kappale