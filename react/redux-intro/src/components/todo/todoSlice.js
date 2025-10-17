import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        value: "",
        todoList: ["task1", "t2"]
    },
    reducers: {
        setValue: (state, obj) => {
            state.value = obj.payload;
        },
        addTodo: (state, obj) => {
            state.todoList = [...state.todoList, state.value]
        
        }
        
    }

})

export default todoSlice;
