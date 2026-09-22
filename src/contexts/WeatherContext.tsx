import React, { createContext, useState, useEffect } from 'react';

export interface Weather {
  dt: number;
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
}

interface Forecast {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
    };
  }>;
}

interface WeatherContextType {
  weather: Weather | null;
  forecast: Forecast | null;
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// create the context
export const WeatherContext = createContext<WeatherContextType | null>(null);

interface WeatherProviderProps {
  children: React.ReactNode;
}

// the useStates required for holding and retrieving data for weather, forecast, and cityname
export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);

  // default city 'bucuresti' shown when the app first loads
  const [cityName, setCityName] = useState('bucurești');

  const [theme, setTheme] = useState('light');

  // retrieves the weather data and places it in weather and forecast, re-rendering on every cityName change
  useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7961547425743ea0caa40964b6c5fe7c`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null); 
      }
    });
}, [cityName]);

useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=7961547425743ea0caa40964b6c5fe7c`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "200") {
        setForecast(data);
      } else {
        setForecast(null); 
      }
    });
}, [cityName]);
  
  useEffect(() => {
  console.log('cityName from URL:', cityName);
  if (cityName) {
    setCityName(cityName);
  }
}, [cityName, setCityName]);

  useEffect(() => {
  document.body.className = theme;
  }, [theme]);

  // the value object holds all the data and functions that any component will be able to access when it receives them
  const value: WeatherContextType = {
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
