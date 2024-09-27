import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './routes/Login';
import Produtos from './components/Produtos';
import CadastroProduto from './components/CadastroProduto';

function App() {
  

  return (
    <Router> 
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/cadastro" element={<CadastroProduto />} />
      </Routes>
      <Footer/>
      
    </Router>
  )
}

export default App
