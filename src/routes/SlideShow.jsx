import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    './assets/brinquedo6.webp',
    './assets/brinquedos2.webp',
    './assets/brinquedo5.webp',
    './assets/brinquedo4.webp',
    
    
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

