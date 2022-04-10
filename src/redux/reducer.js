import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //Adding todos
        addTodos: (state, action) => {
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                text: action.payload.text,
                isCompleted: false
            }
            state.push(newTodo);
        },
        //toggle todo
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].isCompleted = action.payload.isCompleted;
        },
        //delete todo
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        //update todo
        updateTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].text = action.payload.text;
        },
        clearAll: (state, action) => {
            return [];
        }
    }
})

export const {addTodos, toggleComplete, deleteTodo, updateTodo, clearAll} = todoSlice.actions;

export default todoSlice.reducer;