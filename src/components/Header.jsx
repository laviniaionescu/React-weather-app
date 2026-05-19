import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';
import { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

function Header() {
  
  // access theme state and setter from global WeatherContext
  const {theme, setTheme} = useContext(WeatherContext);

  // dynamically choose banner image based on the current theme
  const bannerImage = theme === 'light' 
  ? 'url("https://i.imgur.com/1vp77ya.png")'
  : 'url("https://i.imgur.com/3rphX5r.jpeg")';
  
  // toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // style for dynamic background image
    <header className="header" style={{
      backgroundImage: bannerImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%'
    }}>
      <Link to="/" className="header-link"><button className="header-button">Home</button></Link>
      
      <div className="dropdown">
        <button className="dropdown-btn header-button">Cities ↓</button>
        <div className="dropdown-menu">
          <Link to="/city/bucurești" className="dropdown-item">București</Link>
          <Link to="/city/oradea" className="dropdown-item">Oradea</Link>
          <Link to="/city/cluj" className="dropdown-item">Cluj</Link>
          <Link to="/city/timisoara" className="dropdown-item">Timișoara</Link>
          <Link to="/city/brasov" className="dropdown-item">Brașov</Link>
        </div>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
