import React from 'react'

import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';

import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HomeScreen />
    </div>
  );
};

export default HomePage;