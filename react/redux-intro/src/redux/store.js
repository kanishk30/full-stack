import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../components/counter/counterSlice'
import todoSlice from '../components/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    todoState: todoSlice.reducer
  },
})