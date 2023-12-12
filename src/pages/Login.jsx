import React, { useState, useEffect, useRef } from 'react';
import '../css/login.css';
import BG from '../assets/BgImage_Catherine.png';
import C1 from '../assets/Carousel/C1.png';
import C2 from '../assets/Carousel/C2.png';
import C3 from '../assets/Carousel/C3.png';
import C4 from '../assets/Carousel/C4.png';
import LOGO from '../assets/Logo_Catherine.png';

import Typed from 'typed.js';
import { NavLink } from 'react-router-dom';

function Login() {
  const typedRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const options = {
      strings: ['Welcome back WILDCAT!!'],
      typeSpeed: 50,
      showCursor: false,
    };

    typedRef.current = new Typed('.typed-text', options);

    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageArray.length);
    }, 5000); // Change the interval duration as needed (5000 milliseconds = 5 seconds)

    return () => {
      clearInterval(intervalId); // Clear the interval when the component is unmounted
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the username and password values using state variables
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const imageArray = [C4, C1, C3, C4];



  return (
    <div className='cover'>
      <img src={BG} className='background_image' alt='Background Blob' />
      <h1 className='font-bold text-4xl tracking-wide text-[#5f6061] typed-text'></h1>

      <div className='box'>
        <div className='background_image2'>
          <div className='image-carousel' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {imageArray.map((image, index) => (
              <img key={index} src={image} alt={`Carousel Image ${index + 1}`} width={400} />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='input-field'
              placeholder='Enter your username'
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input-field'
              placeholder='Enter your password'
            />
            <button type='button' className='eye-button' onClick={handleTogglePassword}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <p className="forgot-password" >
            Forgot Password?
          </p>
          <NavLink to="/dashboard" className='submit-button'>Login</NavLink>
        </form>


      </div>
    </div>
  );
}

export default Login;
