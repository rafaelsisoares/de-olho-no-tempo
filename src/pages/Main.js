import React from 'react'

import Input from '../components/input';
import useCity from '../hooks/useCity'
import { roundValues } from '../utils/roundValues';
import { convertToKm } from '../utils/converter';

export default function Main() {
  const { handleChange, handleClick, currentWeather } = useCity();
  const { weather, main, name, wind, cod } = currentWeather;
  return (
    <div>
      <Input handleChange={ handleChange } handleClick={ handleClick }/>
      {
        Object.keys(currentWeather).length > 0 && cod === 200 && (
          <div>
            <div>
              <h1>{name}</h1>
              <img src={ `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png` } alt="Icone da previsão do tempo" />
              <h1>{`${roundValues(main.temp)} °C`}</h1>
            </div>
            <div>
              <p>{`Sensação térmica: ${roundValues(main.feels_like)} °C`}</p>
            </div>
            <div>
              <p>{`Miníma: ${roundValues(main.temp_min)} °C`}</p>
              <p>{`Maxíma: ${roundValues(main.temp_max)} °C`}</p>
            </div>
            <div>
              <p>{`Umidade relativa do ar: ${main.humidity}%`}</p>
            </div>
            <div>
              <p>{`Velocidade do vento: ${convertToKm(wind.speed)} km/h`}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}
