import React from 'react'

const Card = ({nombre, generoMusical}) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <h3>{generoMusical}</h3>
   </div>
  )
}
export {Card};
