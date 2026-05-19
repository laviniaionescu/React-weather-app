import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/home.css';
import '../style/main.css';

function Home() {
  // allows us to select the city whose weather we want to see and links to its page
  return (
    <div>
      <Header />
      <div className='home-div'>

        <h1 className='select-text'>Select a city to view weather and forecast</h1>

        <div className='home-buttons'>
          <Link to="/city/bucurești">
            <button className='home-city-btn'>Bucuresti</button>
          </Link>
          <Link to="/city/oradea">
            <button className='home-city-btn'>Oradea</button>
          </Link>
          <Link to="/city/cluj">
            <button className='home-city-btn'>Cluj</button>
          </Link>
          <Link to="/city/timișoara">
            <button className='home-city-btn'>Timișoara</button>
          </Link>
          <Link to="/city/brașov">
            <button className='home-city-btn'>Brașov</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
