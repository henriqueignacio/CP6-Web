import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> Brinquedos Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastrar-usuario">Cadastrar Usuario</Link>
      </nav>
    </header>
  );
};

export default Header;