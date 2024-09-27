import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> CarDrive Eletric</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;