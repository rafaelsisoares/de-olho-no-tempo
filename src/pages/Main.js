import React from 'react'

import Input from '../components/input';
import WeatherInfo from '../components/weatherInfo';
import useCity from '../hooks/useCity'

export default function Main() {
  const { handleChange, handleClick, currentWeather } = useCity();
  
  return (
    <div>
      <Input handleChange={ handleChange } handleClick={ handleClick }/>
      {
        currentWeather.cod === 200 && (
          <WeatherInfo currentWeather={ currentWeather } />
        )
      }
    </div>
  )
}
