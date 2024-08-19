import React from 'react';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <div className="text-center mt-10">Enter a city to get the weather forecast</div>;
  }

  const { city, list } = weatherData;
  const forecastDays = list.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{city.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded-lg text-center">
            <h3 className="font-semibold">{new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: 'long' })}</h3>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather icon" className="mx-auto"/>
            <p>{day.main.temp}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
