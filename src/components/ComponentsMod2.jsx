import React, { useState, useEffect } from 'react';


export function BotaoEvento() {
  const [numero, setNumero] = useState(0);
  const [vezesClicado, setVezesClicado] = useState(0);
  function clicar() {
    setVezesClicado(vezesClicado + 1);
  }

  function aumentar() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <button onClick={clicar}>Clique aqui</button>
      <p>Você clicou {vezesClicado} vezes</p>
      <button onClick={aumentar}>Aumentar contador</button>
      <p>Contador: {numero}</p>
    </div>
  )
}

export function Formulario() {
  const [nome, setNome] = useState('');

  return (
    <div>
    {/* onChange - captura digitação de texto */}
      <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <p>Ola: {nome}</p>
    </div>
  )
}

export function ExemploUseEffect() { // Sempre que a página for renderizada ou a função for chamada, o useEffect será executado
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('O componente foi montado ou atualizado');
  });

  useEffect(() => {
    console.log("O contador mudou:", contador);
  }, [contador]); // Executa apenas quando o contador mudar

  return (
    <div>
      <p>Voce clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  )
}

export function LimpaEfeitoUseEffect() {
  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log('Intervalo ativo');
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
}