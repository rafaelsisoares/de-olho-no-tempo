import React from 'react';

export default function Input({ handleChange, handleClick }) {
  return (
    <section>
      <div className="container w-6/12 mx-auto">
        <input
          type="text"
          placeholder="Digite o nome de uma cidade"
          onChange={ handleChange }
          className="mt-1 bg-white border border-slate-500"
        />
      </div>
        <div className="container w-2/4 mx-auto pt-2.5 flex justify-center">
          <button
          type='button'
          onClick={ handleClick }
          className="border rounded-md border-black p-1"
          >
            Pesquisar
          </button>
        </div>
    </section>
    
  )
}
