import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
       movies: [],
       loading: true,
       error:false
    },
    reducers: {
       movieLoading: (state, action) => {
        state.error = false;
        state.loading = action.payload
       },
       movieError: (state, action) => {
        state.error = true;
        state.loading = false
       },
       movieData: (state, action) => {
        state.error = false;
        state.loading = false;
        state.movies = action.payload;
       },
    }

})

export default movieSlice;
