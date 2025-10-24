import React, { useState } from 'react';
import { UsuarioContext } from './UsuarioContext';

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState({ nome: "Erick", logado: true });

  // Provider é o pai que disponibiliza os dados para os filhos
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}> {/* Provedor do contexto de usuário */}
      {children} {/* Permite que qualquer componente filho acesse o contexto */}
    </UsuarioContext.Provider>
  )
}