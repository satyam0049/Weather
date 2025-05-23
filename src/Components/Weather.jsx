import React from 'react';

const Weather = ({ currentWeather }) => {
  return (
    <div className='current-weather'>
      <img src='weather.webp' className='weather-icon' />
      <h2 className='temperature'>
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className='description'>{currentWeather.description}</p>
    </div>
  );
};

export default Weather;
