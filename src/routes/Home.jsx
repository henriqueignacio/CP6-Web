import React from 'react';
import Slideshow from './SlideShow';
import CardSection from './CardSection';

const Home = () => {
  return (
    <div>
      <Slideshow />
      <CardSection/> 
      <div className="index-content">
        <h2>Bem-vindo a Brinquedos Store</h2>
        <p>
          A Brinquedos Store é uma loja de brinquedos variados para todas as idades, trazendo inovações e novos produtos para o mercado, assim trazendo alegria e diversão para todos!
        </p>
      </div>
    </div>
  );
};

export default Home;