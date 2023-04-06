import React from 'react';

export default function Input({ handleChange, handleClick }) {
  return (
    <section>
      <div className="container w-7/12 mx-auto max-[600px]:w-full">
        <input
          type="text"
          placeholder="Digite o nome de uma cidade"
          onChange={ handleChange }
          className="mt-1 bg-white border border-slate-500 w-full text-center p-1"
        />
      </div>
        <div className="container w-2/4 mx-auto pt-2.5 flex justify-center">
          <button
          type='button'
          onClick={ handleClick }
          className="border rounded-md border-black mb-2.5 p-1 hover:bg-sky-100 active:bg-sky-300 max-[600px]:p-3"
          >
            Pesquisar
          </button>
        </div>
    </section>
    
  )
}
