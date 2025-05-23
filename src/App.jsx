import { useState } from 'react';
import './App.css';
import SearchSection from './Components/SearchSection';
import Weather from './Components/Weather';
import HourlyWeatherItem from './Components/HourlyWeatherItem';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const forecast = data.forecast.forecastday[0].hour;

      setCurrentWeather({ temperature, description });
      setHourlyForecast(forecast);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <SearchSection getWeatherDetails={getWeatherDetails} />

      <div className='weather-section'>
        <Weather currentWeather={currentWeather} />

        <div className='hourly-forecast'>
          <ul className='weather-list'>
            {hourlyForecast.map((hour, index) => (
              <HourlyWeatherItem
                key={index}
                time={hour.time.slice(-5)}
                icon={hour.condition.icon}
                temp={hour.temp_c}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
