import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    './assets/carroeletrico1.jpg',
    './assets/carroeletrico2.png',
    './assets/carroeletrico3.jpg',
    './assets/carroeletrico4.jpg',
    
    
  ];
  const [index, setIndex] = useState(0);
  const time = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <img src={images[index]} alt="Slideshow" id="imgbanner" />
    </div>
  );
};

export default Slideshow;