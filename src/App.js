import { useState, useEffect } from 'react';

import './App.css';
import Search from './Search';
function App() {

  const [city, setCity] = useState('London');
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherData, setWeatherData] = useState({
    city: '',
    date: '',
    temperature: '',
    overview: '',
    previousTemperature: '',
    wind: '',
    humidity: '',
    visibility: '',
  });

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const convertTemperature = (kelvin) => {
    if (isCelsius) {
      return `${Math.round(kelvin - 273.15)}°C`;
    }
    // Convert to Fahrenheit
    return `${Math.round(((kelvin - 273.15) * 9) / 5 + 32)}°F`;
  };

  useEffect(() => {
    if (city !== '') {
      const apiKey = process.env.REACT_APP_API_KEY;

      const fetchCurrentCityData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          );
          const data = await response.json();
          handleApiResponse(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchCurrentCityData();
    }
  }, [city, isCelsius]);

  const handleApiResponse = (apiResponse) => {
    setWeatherData({
      city: apiResponse.name,
      date: new Date(apiResponse.dt * 1000).toLocaleDateString(),
      temperature: convertTemperature(apiResponse.main.temp),
      overview: apiResponse.weather[0].description,
      previousTemperature: convertTemperature(apiResponse.main.temp_max),
      wind: `${apiResponse.wind.speed} m/s`,
      humidity: `${apiResponse.main.humidity}%`,
      visibility: `${apiResponse.visibility} meters`,
    });
  };

  return (
    <div className="bg-[#e2e8f0]">
      <Search onSearch={setCity} />
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div className="font-bold text-xl">{weatherData.city}</div>
          <div className="text-sm text-gray-500">{weatherData.date}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{weatherData.temperature}</div>
            <div className="flex flex-col items-center ml-6">
              <div>{weatherData.overview}</div>
              <div className="mt-1">
                <span className="text-sm"><i className="far fa-long-arrow-up"></i>{weatherData.previousTemperature}</span>
                <span className="text-sm font-light text-gray-500"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">{weatherData.wind}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{weatherData.humidity}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">{weatherData.visibility}</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <label className="cursor-pointer mr-2">Celsius</label>
            <input type="checkbox" checked={isCelsius} onChange={toggleTemperatureUnit} />
            <label className="cursor-pointer ml-2">Fahrenheit</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
