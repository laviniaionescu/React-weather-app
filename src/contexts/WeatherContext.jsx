import React, { createContext, useState, useEffect } from 'react';

// create the context
export const WeatherContext = createContext();

// the useStates required for holding and retrieving data for weather, forecast, and cityname
export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // default city 'bucuresti' shown when the app first loads
  const [cityName, setCityName] = useState('bucurești');

  const [theme, setTheme] = useState('light');

  // retrieves the weather data and places it in weather and forecast, re-rendering on every cityName change
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7961547425743ea0caa40964b6c5fe7c`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [cityName]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=7961547425743ea0caa40964b6c5fe7c`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data));
  }, [cityName]);

  useEffect(() => {
  document.body.className = theme;
  }, [theme]);

  // the value object holds all the data and functions that any component will be able to access when it receives them
  const value = {
    weather: weather,
    forecast: forecast,
    cityName: cityName,
    setCityName: setCityName,
    theme,
    setTheme
  };

  // because the value is passed here to the provider, which will provide the values to receiving components
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}
