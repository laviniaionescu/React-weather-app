import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WeatherContext } from '../contexts/WeatherContext';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';
import Header from '../components/Header';

function City() {
  // extracts the city name from the URL
  const { cityName } = useParams();
  // we receive the data from the provider, because this page is one of the elements that receives the data in app.js
  const { weather, forecast, setCityName } = useContext(WeatherContext)!;

  // setCityName runs and changes cityName every time the city's name changes
  useEffect(() => {
  if (cityName) {
    setCityName(cityName);
  }
  }, [cityName, setCityName]);

  return (
    <div>
      <Header />
      {/* when weather and forecast have data/are not null, display the current weather and forecast components */}
      {weather && <CurrentWeather weather={weather} />}
      {forecast && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default City;
