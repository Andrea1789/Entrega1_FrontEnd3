import React from 'react'
import './Card.css';

const Card = ({nombre, generoMusical}) => {
  return (
    <div className='card'>
      <h3>{nombre}</h3>
      <h3>{generoMusical}</h3>
   </div>
  )
}
export {Card};
