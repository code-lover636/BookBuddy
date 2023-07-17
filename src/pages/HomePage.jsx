import React, {useState} from 'react'

import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';

import '../styles/HomePage.scss';

const HomePage = () => {
  const [page, setPage] = useState(0);
  const Pages = [HomeScreen, SearchScreen] 
  let CurrentPage = Pages[page]
  return (
    <div className="home-page">
      <Navbar page={page} setPage={setPage} />
      <CurrentPage />
    </div>
  );
};

export default HomePage;