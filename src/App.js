import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = '6f4002d4bb0fe7b0a40a6ee0224602b3';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-green-100 h-60 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-600">Mousam</h1>
        <p className="text-xl mt-2">
          Weather forecasts, nowcasts, and history in a fast and elegant way
        </p>
      </div>
      <Search onSearch={fetchWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
