import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'BMW i4',
    preco: 'R$ 275.000 a R$ 325.000',
    marca: 'BMW',
    imagem: './assets/carroeletrico3.jpg',
  },
  {
    id: 2,
    nome: 'Porsche Taycan',
    preco: 'A partir de R$ 630.000',
    marca: 'Porsche',
    imagem: './assets/carroeletrico1.jpg',
  },
  {
    id: 3,
    nome: 'Tesla Model X',
    preco: 'R$ 900.000 a R$ 1.100.000',
    marca: 'Tesla',
    imagem: './assets/carroeletrico4.jpg',
  },
  {
    id: 4,
    nome: 'Audi e-tron',
    preco: 'A partir de R$ 499.000',
    marca: 'Audi',
    imagem: './assets/carroeletrico5.jpg',
  },
  {
    id: 5,
    nome: 'Jaguar I-Pace',
    preco: 'A partir de R$ 598.000',
    marca: 'Jaguar',
    imagem: './assets/carroeletrico6.jpg',
  },
  {
    id: 6,
    nome: 'Mercedes-Benz EQC',
    preco: 'A partir de R$ 575.000',
    marca: 'Mercedes-Benz',
    imagem: './assets/carroeletrico7.jpg',
  },
];

const Produtos = () => {
  return (
    <section id="card-section" style={{ padding: '30px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {produtos.map((produto) => (
        <div className="card" key={produto.id} style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '15px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', marginBottom: '20px', borderRadius: '10px', transition: 'transform 0.2s ease-in-out' }}>
          <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <h3 style={{ marginBottom: '15px', fontSize: '1.25rem', color: '#333' }}>{produto.nome}</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>Preço: {produto.preco}</p>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#666' }}>Marca: {produto.marca}</p>
        </div>
      ))}
    </section>
  );
};

export default Produtos;