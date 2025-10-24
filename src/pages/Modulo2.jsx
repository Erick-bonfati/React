import '../assets/styles/Modulo2.css'

import * as ComponentsMod2 from '../components/ComponentsMod2.jsx';

import { UsuarioProvider } from '../context/UsuarioProvider.jsx';

const { Formulario, BotaoEvento, ExemploUseEffect, LimpaEfeitoUseEffect, Saudacao } = ComponentsMod2;

export default function Modulo2() {
  return (
    <div className="lessons">
      <Formulario />
      <BotaoEvento />
      <ExemploUseEffect />
      <LimpaEfeitoUseEffect />

      <UsuarioProvider>
        <Saudacao />
      </UsuarioProvider>
        
    </div>
  ); 
}