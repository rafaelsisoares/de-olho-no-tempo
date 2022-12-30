import React from 'react'

export default function Main() {

  const handleChange = ({ target }) => {
    console.log(target.value);
  };

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
