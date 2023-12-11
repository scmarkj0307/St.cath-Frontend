import React, { useState, useEffect, useRef } from 'react';
import '../css/login.css';
import BG from '../assets/BgImage_Catherine.png';
import BG_1 from '../assets/BgImage2_Catherine.png';
import BG_2 from '../assets/BgImage2_Catherine.png';
import BG_3 from '../assets/BgImage2_Catherine.png';
import LOGO from '../assets/Logo_Catherine.png';

import Typed from 'typed.js';

function Login() {
  const typedRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

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


  const imageArray = [BG_1, BG_2, BG_3];

 

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

        <form className='flex flex-col gap-5 p-3 ' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-field'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-field'
          />
          <button type='submit' className='submit-button'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
