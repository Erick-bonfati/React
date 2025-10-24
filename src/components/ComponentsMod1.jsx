import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Saudacao(props) { // props é um objeto que contém as propriedades passadas para o componente
  return <h1>Olá, {props.nome} </h1>
}

export function Status({online}) {
  return (
    <div>
      {online ? <p>Usuário está online</p> : <p>Usuário está offline</p>}
    </div>
  );
}

export function Relogio() {
  const [agora, setAgora] = useState(new Date());

  //Uso do useEffect para atualizar o relógio a cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setAgora(new Date());
    }, 1000);
    
    return () => clearInterval(intervalo); // Limpeza do intervalo ao desmontar o componente
  });

  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <h2>Relógio Atual</h2>
      <p>{horas}:{minutos}:{segundos}</p>
    </div>
  )
}

export function Botao() {
  return <button className="meu-botao">Clique aqui</button>;
}

export function ComEstilo() {
  return <p style={{color: "red", fontSize: "18px"}}>Texto vermelho</p>
}

export function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Você clicou o {numero} vezes</p>
      <button onClick={() => setNumero(numero + 1)}>Clique aqui</button>
    </div>
  );
}

export function LoginUser() {
  const [logado, setLogado] = useState(false);
  return (
    <div>
        <p>
          {logado ? "Bem-vindo de volta!" : "Por favor, faça login."}
        </p>
        <button onClick={() => setLogado(!logado === true)}>
          {logado ? "Logout" : "Login"}
        </button>
      </div>
  )  
}

export function RegisterLogin() {
  const navigate = useNavigate(); // Hook do react-router-dom para navegação programática

  function fazerRegistro() {
    // Lógica de registro aqui
    // Após o registro, redirecionar para a página de login
    navigate('/login');
  };

  return <button onClick={fazerRegistro}>Registrar</button>;
}

export function NavegarPerfil() {
  const navigate = useNavigate();

  const inputPerfil = React.useRef(); // Referência para o input do nome do usuário

  function irParaPerfil() {
    navigate(`/usuario/${inputPerfil.current.value}`); // Navega para a rota do perfil com o nome do usuário
  }

  return (
    <div>
      <input type="text" ref={inputPerfil} placeholder="Digite o nome do usuário" />
      <button onClick={irParaPerfil}>Ir para o Perfil</button>
    </div>
  );
}
