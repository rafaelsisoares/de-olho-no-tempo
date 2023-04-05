import React from "react";

import { roundValues } from '../utils/roundValues';
import { convertToKm } from '../utils/converter';

export default function WeatherInfo({ currentWeather }) {
  const { weather, main, name, wind } = currentWeather;

  return (
    <div className="">
      <div className="w-2/3 mx-auto">
        <h1 className="font-bold text-center text-xl pt-2.5">{name}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Icone da previsão do tempo"
          className="mx-auto"
        />
        <h1 className="text-center text-lg pb-2.5 font-medium">{`${roundValues(main.temp)} °C`}</h1>
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
  );
}