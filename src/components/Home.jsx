import React from 'react';
import Slideshow from './SlideShow';
import CardSection from './CradSection';

const Home = () => {
  return (
    <div>
      <Slideshow />
      <CardSection/> 
      <div className="index-content">
        <h2>Bem-vindo ao CarDrive Eletric</h2>
        <p>
          A CarDrive Eletric é uma loja de carros totalmente elétrica, trazendo inovações e novas tecnologias para o futuro
          dos carros. Com a missão de tornar a automóvel e da mobilidade sustentável.
        </p>
      </div>
    </div>
  );
};

export default Home;