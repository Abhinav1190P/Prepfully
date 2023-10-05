# Weather Dashboard

A simple weather dashboard application built with React that allows users to search for the current weather conditions of a city. The application uses the OpenWeatherMap API to fetch weather data and displays information such as temperature, weather description, humidity, wind speed, and visibility.

## Features

- **City Search:** Users can enter the name of a city and click the "Search" button to get weather information for that city.
- **Weather Display:** After a successful search, the dashboard displays the current weather conditions for the city, including temperature, weather description, humidity, wind speed, and visibility.
- **Error Handling:** Graceful handling of errors, displaying a message if the city is not found or if there is an issue with the API request.
- **Unit Conversion:** Provides an option to switch between Celsius and Fahrenheit for temperature display.
- **Responsive Design:** Ensures the dashboard is responsive and looks good on both desktop and mobile devices.

## Setup

1. Clone the repository: `git clone <https://github.com/Abhinav1190P/Prepfully>`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with your OpenWeatherMap API key:

   ```env
   REACT_APP_API_KEY=your_api_key_here
   REACT_APP_BASE_URL=https://api.openweathermap.org/data/2.5
   ```

4. Start the development server: `npm start`

## Environment Variables

- `REACT_APP_API_KEY`: Your OpenWeatherMap API key.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Provides weather data API for the application.
- **dotenv**: Library for loading environment variables from a `.env` file.

## Folder Structure

- `src/`: Contains the React application source code.
  - `components/`: React components used in the application.
  - `styles/`: CSS or styles related to components.
- `public/`: Public assets and the HTML file.
- `.env`: Environment variable configuration file (ignored in version control).

## Acknowledgments

- **OpenWeatherMap**: Powered by OpenWeatherMap API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's specific details and requirements.