import React, { useEffect } from 'react';
import jenna from '../assets/jenna.jpg';
import { RiVipDiamondLine, RiCoinLine } from 'react-icons/ri';
import Typed from 'typed.js';
import '../css/header.css';

const Header = () => {
  useEffect(() => {
    // Initialize the Typed instance
    const typed = new Typed('.greetings', {
      strings: ['Welcome, Jenna Ortega!!'],
      typeSpeed: 50, // Typing speed in milliseconds
      showCursor: false, // Hide the cursor
    });

    // Destroy the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className='greetings'></h1>
        <div className="user-info">
          <img src={jenna} alt="jenna" className="user-image" />
          <div className="user-details">
            <p className="font-semibold">Jenna</p>
            <div className="user-stats">
              <div>
                <RiVipDiamondLine size={25} className="icon-blue" />
                <p>4</p>
              </div>
              <div>
                <RiCoinLine size={25} className="icon-yellow" />
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
