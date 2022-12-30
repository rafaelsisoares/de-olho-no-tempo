import { useState } from "react";

import requestAPI from "../utils/api";

export default function useCity() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState('');

  const handleChange = ({ target: { value } }) => {
    const arrCity = value.split(' ');
    const strCity = arrCity.join('+');
    setCity(strCity);
  };

  const handleClick = async () => {
    const weatherData = await requestAPI(city);
    setCurrentWeather(weatherData);
  }

  return {
    handleChange,
    handleClick,
    currentWeather,
  };
}
