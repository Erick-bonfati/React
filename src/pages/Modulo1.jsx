import '../assets/styles/Modulo1.css'
import * as ComponentsMod1 from '../components/ComponentsMod1.jsx';

const { Saudacao, Status, Relogio, Botao, ComEstilo, Contador, LoginUser, RegisterLogin, NavegarPerfil, ListaUsuarios } = ComponentsMod1;



export default function Modulo1() {
  return (
    <section className="home">
      <LoginUser />
      <Status online={true} /> 
      <Relogio />
      <Saudacao nome="Erick" />
      <Botao />
      <ComEstilo />
      <Contador />
      <RegisterLogin />
      <NavegarPerfil />
      <ListaUsuarios />
    </section>
  );
}

