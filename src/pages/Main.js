import React from 'react'

import useCity from '../hooks/useCity'

export default function Main() {
  const { handleChange } = useCity();
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome de uma cidade" 
        onChange={ handleChange }
      />
    </div>
  )
}
