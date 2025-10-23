import '../styles/Lessons.css';
import { useState, useEffect } from 'react';

function BotaoEvento() {
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

function Formulario() {
  const [nome, setNome] = useState('');

  return (
    <div>
    {/* onChange - captura digitação de texto */}
      <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <p>Ola: {nome}</p>
    </div>
  )
}

export default function Lessons() {
  return (
    <div className="lessons">
      <Formulario />
      <BotaoEvento />
    </div>
  ); 
}