import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../components/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer
  },
})