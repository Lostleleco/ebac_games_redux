import { configureStore } from '@reduxjs/toolkit'
import carrinhoReduces from './reducer/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReduces
  }
})

export type RootReducer = ReturnType<typeof store.getState>
