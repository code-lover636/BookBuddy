import React from 'react';
import '../styles/WelcomePage.scss';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
        <div className="wrapper">
            <h1 className="heading">Say, partner, fancy a good ol' book?</h1>
            <h2 className="sub-heading">Machine learning based book recommendation system.</h2>
            <div className="buttons">
                <a href="/login" className="button1">Login</a>
                <a href="/login" className="button2">Sign Up</a>
            </div>
        </div>
        <img className="shelf" src="./assets/shelf.png" alt="shelf" />
    </div>
  );
};

export default WelcomePage;