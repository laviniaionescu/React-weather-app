import formatDay from '../utils/formatDay';
import formatDate from '../utils/formatDate';
import getWeatherIcon from '../utils/getWeatherIcon';
import '../style/currentweather.css';
import '../style/main.css';
import { Weather } from '../contexts/WeatherContext';

interface CurrentWeatherProps {
  weather: Weather;
}

function CurrentWeather({ weather }: CurrentWeatherProps) {
  // If weather is null or undefined, show nothing (or a loading message)
  if (!weather || !weather.weather || !weather.main) {
  return <div>Loading weather data...</div>;
}

  return (
  <div className='weather-content'>
    <h4 className='today-date'>Today, {formatDay(weather.dt)}, {formatDate(weather.dt)}</h4>
      <h2 className='current-weather-text'>Current weather:</h2>
      <div className='weather-icon-container'>
        <img className='weather-icon-img' src={getWeatherIcon(weather.weather[0].icon)} alt="weather icon" style={{ width: '100px', verticalAlign: 'middle' }} />
      </div>

  
    <div className="weather-grid">
      
      <div className="weather-left">
        <p><span className="material-symbols-outlined grid-icon">thermostat</span>Temperature: {Math.round(weather.main.temp)}°C</p>
        <p><span className="material-symbols-outlined grid-icon">thermometer_loss</span>Min temperature: {Math.round(weather.main.temp_min)}</p>
        <p><span className="material-symbols-outlined grid-icon">thermometer_gain</span>Max temperature: {Math.round(weather.main.temp_max)}</p>
        <p><span className="material-symbols-outlined grid-icon">heat</span>Feels like: {Math.round(weather.main.feels_like)}°C</p>
      </div>
      
      <div className="weather-right">
        <p><span className="material-symbols-outlined grid-icon">water_drop</span>Humidity: {weather.main.humidity}%</p>
        <p><span className="material-symbols-outlined grid-icon">air</span>Wind: {(weather.wind.speed * 3.6).toFixed(1)} km/h</p>
        <p><span className="material-symbols-outlined grid-icon">compare_arrows</span>Pressure: {weather.main.pressure} hPa</p>  {/* ← NEW */}
        <p><span className="material-symbols-outlined grid-icon">description</span>{weather.weather[0].main}: {weather.weather[0].description}</p>
      </div>
        
    </div>
      
      <h2>5 Day Forecast</h2>
      
  </div>
  );
}

export default CurrentWeather;
