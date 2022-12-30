import React from 'react'

import useCity from '../hooks/useCity'

export default function Main() {
  const { handleChange, handleClick, weather } = useCity();
  console.log(weather);
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome de uma cidade" 
        onChange={ handleChange }
      />
      <button type='button' onClick={ handleClick }>Pesquisar</button>
    </div>
  )
}
