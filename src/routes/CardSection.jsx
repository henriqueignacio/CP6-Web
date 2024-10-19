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
        <img src="./assets/brinquedos1.webp" alt="BMW" />
        <h3>Mega City Garagem Pista De Carrinhos Estacionamento 4 Carros</h3>
        <p>R$ 199,90</p>
        
        
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
      <div className="card">
        <img src="./assets/brinquedos2.webp" alt="Porsche" />
        <h3>Brinquedo Eletrônico Infantil Shooting Duck (Acertar Pato)</h3>
        <p>R$ 189,00</p>
        
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
      <div className="card">
        <img src="./assets/brinquedos3.webp" alt="Mahindra M10Electro" />
        <h3>Brinquedo Infantil Lançador de Orbeez Realista M416 Elétrica</h3>
        <p>R$ 450,00</p>
       
        <button onClick={() => handleViewProduct('produtos')}>Ver Produto</button>
      </div>
    </section>
  );
};

export default CardSection;