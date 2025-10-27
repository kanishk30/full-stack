import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        loading: true,
        error: false,
        user: null
    },
    reducers: {
       userLoading: (state, action) => {
            state.error = false;
            state.loading = true;
       },

       userError: (state, action) => {
            state.error = true;
            state.loading = false;
       },

       userData: (state, action) => {
            state.loading = false;
            state.error = false;
            state.user = action.payload;
       }
    }

})

export default userSlice;
