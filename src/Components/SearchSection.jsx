import React, { useState } from 'react';

const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState('');

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (!city) return;

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`;
    getWeatherDetails(API_URL);
  };

  return (
    <div className='search-section'>
      <form className='search-form' onSubmit={handleCitySearch}>
        <span className='material-symbols-rounded'>search</span>
        <input
          type='search'
          placeholder='Enter a city name'
          className='search-input'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      <button onClick={handleCitySearch} className='location-button'>
        <span className='material-symbols-rounded'>my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
