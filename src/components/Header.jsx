import React from 'react';
import jenna from '../assets/jenna.jpg';
import { RiVipDiamondLine, RiCoinLine } from 'react-icons/ri';
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className='greetings'>
          Welcome, <span className="font-semibold">Surname, First Name!</span>
        </h1>
        <div className="user-info">
          <img src={jenna} alt="jenna" className="user-image" />
          <div className="user-details">
            <p className="font-semibold">Nickname</p>
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
