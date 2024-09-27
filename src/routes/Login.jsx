import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Hooks useRef para pegar a referência dos inputs de email e senha
  const emailRef = useRef();
  const passwordRef = useRef();

  // Hook useState para armazenar usuários
  const [users, setUsers] = useState([]);

  // Hook useNavigate para redirecionar o usuário após o login
  const navigate = useNavigate();

  // Função de validação
  const validateUser = () => {
    return users.some(
      (user) =>
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
    );
  };

  // Função de submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser()) {
      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('email', emailRef.current.value);
      sessionStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  // Hook useEffect para buscar os dados de usuários
  useEffect(() => {
    fetch('http://localhost:5000/usuarios')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="container">
      <div className="container-login">
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="titulo-login">Faça seu Login</span>

            <div className="w-input">
              <input
                type="email"
                className="input-form"
                id="email"
                ref={emailRef}
              />
              <span placeholder="Email"></span>
            </div>

            <div className="w-input">
              <input
                type="password"
                className="input-form"
                id="password"
                ref={passwordRef}
              />
              <span placeholder="Senha"></span>
            </div>

            <div className="login-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>

            <ul className="uteis">
              <li>
                <span className="texto1">Esqueceu sua senha?</span>
              </li>
              <li>
                <span className="texto1">Não possui Conta?</span>
                <a href="#">Criar</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;