// import '../assets/styles/Modulo3.css'

import { ContadorRedux, ListaUsuarioMemo, Pai, InputFoco, ContadorRender } from '../components/ComponentsMod3.jsx';

export default function Modulo3() {
  return (
    <div>
      <ContadorRedux />
      <ListaUsuarioMemo usuarios={[{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }, { id: 3, nome: "Erick" }]} />
      <Pai />
      <InputFoco />
      <ContadorRender />
    </div>
  )
}