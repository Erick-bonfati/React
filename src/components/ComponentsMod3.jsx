import React, { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, resetar } from "../store/contadorSlice"

export function ContadorRedux() {
  const valor = useSelector((state) => state.contador.valor)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Valor: {valor}</h2>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
      <button onClick={() => dispatch(resetar())}>Resetar</button>
    </div>
  )
}


export function ListaUsuarioMemo({ usuarios }){ // useMemo para otimizar a renderização de listas filtradas, ele salva o resultado da função e só recalcula quando a dependência muda
  const [busca, setBusca] = useState("")

  const usuarioFiltrado = useMemo(() => {
    console.log("Filtrando usuários...")
    return usuarios.filter(usuario => usuario.nome.toLowerCase().includes(busca.toLowerCase()))
  }, [busca, usuarios]) // Só recalcula quando busca ou usuarios mudam;

  return (
    <div>
      <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar usuário"/>
      <ul>
        {usuarioFiltrado.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  )
}

const Filho = React.memo(function Filho({ contador, incrementar }) {
  console.log("Renderizou o filho!")
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
})

export function Pai() {
  const [contador, setContador] = useState(0)

  const incrementar = useCallback(() => {
    setContador(c => c + 1)
  }, [])

  console.log("Renderizou o pai!")

  return (
    <div>
      <h2>Exemplo de useCallback</h2>
      <Filho contador={contador} incrementar={incrementar} />
    </div>
  )
}

export function InputFoco() {
  const inputRef = useRef();

  function focar() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
      <button onClick={focar}>Focar</button>
    </div>
  )
}

export function ContadorRender() {
  const [numero, setNumero] = useState(0)
  const contadorRender = useRef(0)

  useEffect(() => {
    contadorRender.current += 1
  })

  return (
    <div>
      <p>Número: {numero}</p>
      <p>Renderizações: {contadorRender.current}</p>
      <button onClick={() => setNumero(n => n + 1)}>+</button>
    </div>
  )
}