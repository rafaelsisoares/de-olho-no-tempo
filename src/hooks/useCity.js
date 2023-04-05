import { useState } from "react";

import requestAPI from "../utils/api";

export default function useCity() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const arrCity = value.split(' ');
    const strCity = arrCity.join('+');
    setCity(strCity);
  };

  const handleClick = async () => {
    setLoading(true);
    const weatherData = await requestAPI(city);
    setCurrentWeather(weatherData);
    setLoading(false);
  }

  return {
    handleChange,
    handleClick,
    currentWeather,
    loading,
  };
}
