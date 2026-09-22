import formatDay from '../utils/formatDay';
import getWeatherIcon from '../utils/getWeatherIcon';
import '../style/currentweather.css';
import '../style/main.css';

export interface ForecastItemType {
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
}

interface ForecastItemProps {
  forecast: ForecastItemType;
}

// forecastitem receives the daily weather items from forecastlist
function ForecastItem({ forecast }: ForecastItemProps) {

  return (
    <div className='weather-content'>
      {/* we get and display the day using the formatting utility function */}
      <div className='day-container'>{formatDay(forecast.dt)}</div>
      <div className='weather-icon-container'>
        <img src={getWeatherIcon(forecast.weather[0].icon)} alt="weather icon" style={{ width: '100px', verticalAlign: 'middle' }} />
      </div>

  
    <div className="weather-grid">
      
        <div className="weather-left">
        <p><span className="material-symbols-outlined grid-icon">thermostat</span>Temperature: {Math.round(forecast.main.temp)}°C</p>
        <p><span className="material-symbols-outlined grid-icon">thermometer_loss</span>Min temperature: {Math.round(forecast.main.temp_min)}</p>
        <p><span className="material-symbols-outlined grid-icon">thermometer_gain</span>Max temperature: {Math.round(forecast.main.temp_max)}</p>
        <p><span className="material-symbols-outlined grid-icon">heat</span>Feels like: {Math.round(forecast.main.feels_like)}°C</p>

      </div>
      
      <div className="weather-right">
        <p><span className="material-symbols-outlined grid-icon">water_drop</span>Humidity: {forecast.main.humidity}%</p>
        <p><span className="material-symbols-outlined grid-icon">air</span>Wind: {(forecast.wind.speed * 3.6).toFixed(1)} km/h</p>
        <p><span className="material-symbols-outlined grid-icon">compare_arrows</span>Pressure: {forecast.main.pressure} hPa</p>
        <p><span className="material-symbols-outlined grid-icon">description</span>{forecast.weather[0].main}: {forecast.weather[0].description}</p>
      </div>
      
    </div>
  </div>
  );
}

export default ForecastItem;
