import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //construct a todo object
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      //add todo to store
      state.todos.push(todo);
    },

    //Delete todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    //Update todo
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = todo ? action.payload.text : "";
    },

    //Toggle todo state
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = todo ? !todo.completed : "";
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo, updateTodo, toggleTodo } = actions;
export default reducer;
