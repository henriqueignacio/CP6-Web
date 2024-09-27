import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardSection = () => {
  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    navigate(`/${productId}`);
  };

  return (
    <section id="card-section">
      <div className="card">
        <img src="./assets/carroeletrico3.jpg" alt="BMW" />
        <h3>BMW i4</h3>
        <p>R$ 275.000 a R$ 325.000.</p>
        <p>BMW</p>
        
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
      <div className="card">
        <img src="./assets/carroeletrico1.jpg" alt="Porsche" />
        <h3>Porsche Taycan</h3>
        <p>partir de R$ 630.000,00.</p>
        <p>Porsche</p>
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
      <div className="card">
        <img src="./assets/carroeletrico4.jpg" alt="Mahindra M10Electro" />
        <h3>Tesla Model X</h3>
        <p>R$ 900.000,00 a R$ 1.100.000,00</p>
        <p>Tesla</p>
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
    </section>
  );
};

export default CardSection;