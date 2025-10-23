import '../assets/styles/Modulo2.css'

import * as ComponentsMod2 from '../components/ComponentsMod2.jsx';

const { Formulario, BotaoEvento, ExemploUseEffect, LimpaEfeitoUseEffect } = ComponentsMod2;

export default function Modulo2() {
  return (
    <div className="lessons">
      <Formulario />
      <BotaoEvento />
      <ExemploUseEffect />
      <LimpaEfeitoUseEffect />
    </div>
  ); 
}