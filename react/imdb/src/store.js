import { configureStore } from '@reduxjs/toolkit'
import paginationSlice from './redux/paginationSlice'
import movieSlice from './redux/movieSlice'

export const store = configureStore({
  reducer: {
    paginationState: paginationSlice.reducer,
    movieState: movieSlice.reducer
  },
})