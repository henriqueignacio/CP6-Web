import './CadastrarUsuario.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastrarUsuario = () => {
  // Referências para capturar os valores dos inputs
  const nomeRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Hook para navegação após o cadastro
  const navigate = useNavigate();

  // Função de submit para registrar o usuário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dados do novo usuário
    const novoUsuario = {
      nome: nomeRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Fazer uma requisição POST para salvar o usuário
    fetch('http://localhost:5000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoUsuario),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário');
        }
        return response.json();
      })
      .then((data) => {
        alert('Usuário cadastrado com sucesso!');
        // Após o cadastro, redirecionar o usuário para a página de login
        navigate('/login');
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao cadastrar o usuário. Tente novamente.');
      });
  };

  return (
    <section className="container">
      <div className="container-login">
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="titulo-login">Cadastre-se</span>

            <div className="w-input">
              <input
                type="text"
                className="input-form"
                id="nome"
                ref={nomeRef}
                required
              />
              <span placeholder="Nome"></span>
            </div>

            <div className="w-input">
              <input
                type="email"
                className="input-form"
                id="email"
                ref={emailRef}
                required
              />
              <span placeholder="Email"></span>
            </div>

            <div className="w-input">
              <input
                type="password"
                className="input-form"
                id="password"
                ref={passwordRef}
                required
              />
              <span placeholder="Senha"></span>
            </div>

            <div className="login-btn">
              <button type="submit" className="login-form-btn">
                Cadastrar
              </button>
            </div>

            <ul className="uteis">
              <li>
                <span className="texto1">Já possui conta?</span>
                <a href="/login">Login</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CadastrarUsuario;





