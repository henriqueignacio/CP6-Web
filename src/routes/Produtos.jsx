import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Mega City Garagem Pista De Carrinhos Estacionamento 4 Carros',
    preco: 'R$ 199,90',
    imagem: './assets/brinquedos1.webp',
  },
  {
    id: 2,
    nome: ' Brinquedo Eletrônico Infantil Shooting Duck (Acertar Pato)',
    preco: 'R$ 189,00',
    imagem: './assets/brinquedos2.webp',
  },
  {
    id: 3,
    nome: 'Brinquedo Infantil Lançador de Orbeez Realista M416 Elétrica',
    preco: 'R$ 450,00',
    imagem: './assets/brinquedos3.webp',
  },
  {
    id: 4,
    nome: 'Bancada Maleta Cozinha Infantil Brinquedo Kitchen Replaykids',
    preco: 'R$ 139,00',
    imagem: './assets/brinquedo4.webp',
  },
  {
    id: 5,
    nome: 'Cacto Dançante Falante Repete A Fala Brinquedo Criança',
    preco: 'R$ 50,00',
    imagem: './assets/brinquedo5.webp',
  },
  {
    id: 6,
    nome: 'Carrinhos Robo 5 em 1 Brinquedo Infantil Monta e Desmonta Construbots',
    preco: 'R$ 79,00',
    imagem: './assets/brinquedo6.webp',
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
