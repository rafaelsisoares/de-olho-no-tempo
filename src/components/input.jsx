import React from 'react';

export default function Input({ handleChange, handleClick }) {
  return (
    <div className="w-fit">
        <input
        type="text"
        placeholder="Digite o nome de uma cidade" 
        onChange={ handleChange }
        className="mt-1 bg-white border border-slate-500"
      />
      <button type='button' onClick={ handleClick }>Pesquisar</button>
    </div>
  )
}
