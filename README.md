# Weather App

A responsive weather application built with React that displays current weather and a 5-day forecast for multiple cities. The app features a dark/light theme toggle, dynamic city selection via URL routing, and persistent theme state.

## Features

- **Current Weather**: Displays temperature, min/max, feels-like, humidity, wind speed, pressure, and weather conditions
- **5-Day Forecast**: Shows daily forecast with temperature, conditions, and weather icons
- **City Selection**: Choose from multiple cities (București, Oradea, Cluj, Timișoara, Brașov) via dropdown or homepage buttons
- **Dark/Light Theme**: Toggle between themes with persistent visual updates
- **Routing**: Dynamic URL routing for each city (`/city/city-name`)
- **404 Page**: Custom error page for invalid routes
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **React** – UI library
- **React Router** – Client-side routing
- **Context API** – Global state management for weather data and theme
- **OpenWeatherMap API** – Real-time weather and forecast data
- **CSS3** – Custom styling with dark/light theme support
- **Netlify** – Deployment

## Project Structure
src/

├── components/

│ ├── CurrentWeather.jsx

│ ├── ForecastItem.jsx

│ ├── ForecastList.jsx

│ └── Header.jsx

├── contexts/

│ └── WeatherContext.jsx

├── pages/

│ ├── Home.jsx

│ ├── City.jsx

│ └── Page404.jsx

├── utils/

│ ├── formatDate.js

│ ├── formatDay.js

│ ├── formatTime.js

│ └── getWeatherIcon.js

├── style/

│ ├── header.css

│ ├── currentweather.css

│ ├── home.css

│ └── main.css

├── App.js

└── index.js


## How It Works

1. The user selects a city from the homepage or the dropdown menu in the header
2. The app fetches current weather and 5-day forecast data from the OpenWeatherMap API
3. Data is stored in the global WeatherContext and passed to components via props
4. Current weather and forecast are displayed in a clean, card-based layout
5. The theme toggle switches between light and dark modes, with the preference persisting across the app

## How to Run Locally

bash
- Clone the repository
git clone https://github.com/laviniaionescu/weather-app.git

- Navigate to the project folder

- Install dependencies
npm install

- Start the development server
npm start

- Open http://localhost:3000 in your browser.

## Environment Variables
This project uses the OpenWeatherMap API. You'll need an API key:
REACT_APP_WEATHER_API_KEY=your_api_key_here

## The app uses the current weather and 5-day forecast endpoints:
https://api.openweathermap.org/data/2.5/weather

https://api.openweathermap.org/data/2.5/forecast

## Screenshots
<img width="1875" height="929" alt="image" src="https://github.com/user-attachments/assets/b4307a74-824c-4302-b15c-a8c5a6eec310" />
<img width="1878" height="925" alt="image" src="https://github.com/user-attachments/assets/3b85d944-45e1-4440-a8f8-f2357ad50a62" />
<img width="1877" height="930" alt="image" src="https://github.com/user-attachments/assets/01c62fdc-a8ed-46ea-8420-1c3ceffc9f84" />
<img width="1875" height="928" alt="image" src="https://github.com/user-attachments/assets/d9e780c3-a562-45d5-a58c-24bce07850b6" />


## Acknowledgements
OpenWeatherMap for providing the weather data API
Google Material Icons for the icon set
IT School for the React curriculum

## License
This project was created for educational purposes as part of a web development bootcamp.
