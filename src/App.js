import { useState, useEffect } from 'react';

import './App.css';
import Search from './Search';
function App() {

  const [city, setCity] = useState('London')

  const handleSearch = async (data) => {
    setCity(data)
  }

  const [weatherData, setweatherData] = useState({
    city: '',
    date: '',
    temperature: '',
    overview_temp: '',
    previous_temp: '',
    wind: '',
    humidity: '',
    visibility: ''
  })

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
  }, [city]);

  const handleApiResponse = (apiResponse) => {
    setweatherData({
      city: apiResponse.name,
      date: new Date(apiResponse.dt * 1000).toLocaleDateString(),
      temperature: `${Math.round(apiResponse.main.temp - 273.15)}°C`,
      overview: apiResponse.weather[0].description,
      previousTemperature: `${Math.round(apiResponse.main.temp_max - 273.15)}°C`,
      wind: `${apiResponse.wind.speed} m/s`,
      humidity: `${apiResponse.main.humidity}%`,
      visibility: `${apiResponse.visibility} meters`,
    });
  };
  console.log(weatherData)
  return (
    <div className="bg-[#e2e8f0]">
      <Search onSearch={handleSearch} />
      <div class="min-h-screen flex items-center justify-center">
        <div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div class="font-bold text-xl">{weatherData.city}</div>
          <div class="text-sm text-gray-500">{weatherData.date}</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">{weatherData.temperature}</div>
            <div class="flex flex-col items-center ml-6">
              <div>{weatherData.overview}</div>
              <div class="mt-1">
                <span class="text-sm"><i class="far fa-long-arrow-up">{weatherData.previousTemperature}</i></span>
                <span class="text-sm font-light text-gray-500"></span>
              </div>

            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm text-gray-500">{weatherData.wind}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-gray-500">{weatherData.humidity}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-gray-500">{weatherData.visibility}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
