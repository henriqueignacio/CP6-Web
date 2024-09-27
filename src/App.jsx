import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './routes/Login';
import Produtos from './components/Produtos';
import CadastroProduto from './components/CadastroProduto';
import Error from './routes/Error';
import Sobre from './components/Sobre'



function App() {
  

  return (
    <Router> 
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/cadastro" element={<CadastroProduto />} />
      <Route path="*" element={<Error />} />
      <Route path="/sobre" element={<Sobre />} />

      </Routes>
      <Footer/>
      
    </Router>
  )
}

export default App
