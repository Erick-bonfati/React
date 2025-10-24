import { configureStore } from "@reduxjs/toolkit"
import contadorSlice from "./contadorSlice"

export const store = configureStore({
  reducer: {
    contador: contadorSlice
  }
})
