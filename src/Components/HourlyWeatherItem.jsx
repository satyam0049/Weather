import React from 'react';

const HourlyWeatherItem = ({ time, icon, temp }) => {
  return (
    <li className='weather-item'>
      <p className='time'>{time}</p>
      <img src={icon} className='weather-icon' />
      <p className='temperature'>{temp}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
