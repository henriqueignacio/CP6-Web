import React, { useState } from 'react';

const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    preco: '',
    marca: '',
    imagem: '',
    cidade: '',
    contato: '', // Adicionando campo de contato
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProdutos([...produtos, form]);
    setForm({
      nome: '',
      preco: '',
      marca: '',
      imagem: '',
      cidade: '',
      contato: '', // Resetando o campo contato
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastrar Carro Elétrico</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div>
          <label>Nome do Carro: </label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Preço: </label>
          <input
            type="text"
            name="preco"
            value={form.preco}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Marca: </label>
          <input
            type="text"
            name="marca"
            value={form.marca}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Imagem (URL): </label>
          <input
            type="text"
            name="imagem"
            value={form.imagem}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
        <div>
          <label>Número para Contato: </label>
          <input
            type="tel"
            name="contato"
            value={form.contato}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '10px', width: '100%' }}
            pattern="[0-9]{10,11}" // Validação para aceitar apenas números de 10 ou 11 dígitos
            placeholder="Ex: 11987654321"
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Cadastrar
        </button>
      </form>

      <h2>Carros Elétricos Cadastrados</h2>
      <section id="card-section" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {produtos.map((produto, index) => (
          <div key={index} className="card" style={{ border: '1px solid #ccc', padding: '15px', width: '30%', marginBottom: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
            <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
            <h3>{produto.nome}</h3>
            <p>Preço: {produto.preco}</p>
            <p>Marca: {produto.marca}</p>
            <p>Cidade: {produto.cidade}</p>
            <p>Contato: {produto.contato}</p> {/* Exibindo o número para contato */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CadastroProduto;
