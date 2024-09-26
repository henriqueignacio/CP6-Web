import React from 'react';
import Slideshow from './SlideShow';
// import CardSection from './CardSection';

const Home = () => {
  return (
    <div>
      <Slideshow />
      {/* <CardSection/> */}
      <div className="index-content">
        <h2>Bem-vindo ao CarDrive Eletric</h2>
        <p>
          A Formula E é a categoria de automobilismo totalmente elétrica, trazendo inovações para o futuro
          das corridas e da mobilidade sustentável.
        </p>
      </div>
    </div>
  );
};

export default Home;