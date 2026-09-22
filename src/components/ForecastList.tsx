import ForecastItem, { ForecastItemType } from './ForecastItem';

interface ForecastListProps {
  forecast: {
    list: ForecastItemType[];
  };
}

// forecastlist receives the forecast json data from city.jsx
function ForecastList({forecast}: ForecastListProps) {
  
  if (!forecast?.list) {
    return null;
  }

  // forecast.list has 40 items, 1 every 3 hours. we want one item per day, so we take every 8th item only
  // each item has: dt (timestamp), main.temp, weather[0].icon, etc
  const dailyForecasts = forecast.list.filter((_, index) => index % 8 === 0)
  .slice(1);

  return (
    <div>
      <div>
        {/* we map through each item, where the item is the forecast for the day, creating a new list of items (daily forecasts) */}
        {/* we pass the list to forecastitem with the weather info, where forecast is the weather info of one day */}
        {/* key={item.dt} is necessary for react to keep track of items. apparently */}
        {dailyForecasts.map((item) => {
          return <ForecastItem key={item.dt} forecast={item} />;
        })}
      </div>
    </div>
  );
}

export default ForecastList;
