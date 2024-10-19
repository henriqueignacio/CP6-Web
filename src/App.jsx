import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './routes/Login';
import Produtos from './routes/Produtos';
import Error from './routes/Error';
import Sobre from './routes/Sobre';
import CadastrarUsuario from './routes/CadastrarUsuario';
import Home from './routes/Home';




function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/produtos" element={<Produtos />} />
       <Route path="/sobre" element={<Sobre />} />
       <Route path="*" element={<Error />} />
       <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

