import React from 'react'

import Input from '../components/input';
import WeatherInfo from '../components/weatherInfo';
import useCity from '../hooks/useCity'

export default function Main() {
  const { handleChange, handleClick, currentWeather, loading } = useCity();
  
  return (
    <div className='bg-slate-300 w-4/12 p-2.5 mx-auto  mt-28 border rounded-xl opacity-75 max-[600px]:w-8/12'>
      <Input handleChange={ handleChange } handleClick={ handleClick }/>
      {
        currentWeather.cod === 200 && (
          <WeatherInfo currentWeather={ currentWeather } loading={ loading } />
        )
      }
    </div>
  )
}
