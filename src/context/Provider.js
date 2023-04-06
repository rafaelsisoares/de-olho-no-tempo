import React, { useState } from 'react'

import MainContext from './MainContext';

export default function Provider({ children }) {
  const [city, setCity] = useState('');
  const contextValue = {
    city,
    setCity,
  };
  return (
    <MainContext.Provider value={contextValue}>{ children }</MainContext.Provider>
  )
}
