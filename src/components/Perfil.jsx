import { useParams } from 'react-router-dom';

export default function Perfil() {
  const { nome } = useParams();

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Bem-vindo ao perfil de {nome}!</p>
    </div>
  );
}