import { createSlice } from "@reduxjs/toolkit"

const contadorSlice = createSlice({
  name: "contador",
  initialState: { valor: 0 },
  reducers: {
    incrementar: (state) => { state.valor += 1 },
    decrementar: (state) => { state.valor -= 1 },
    resetar: (state) => { state.valor = 0 }
  }
})

export const { incrementar, decrementar, resetar } = contadorSlice.actions
export default contadorSlice.reducer
