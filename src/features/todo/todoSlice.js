import { createSlice, nanoid } from "@reduxjs/toolkit";
import persistData from "./localStorage"

//get todos from localstorage
const todos =
  localStorage.getItem("todos") !== null
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

const initialState = {
  todos,
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
      //save array of todos in localstorage
      // localStorage.setItem(
      //   "todos",
      //   JSON.stringify(state.todos.map((todo) => todo))
      // );
      persistData(state, "todos")
    },

    //Delete todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      //save array of todos in localstorage
      // localStorage.setItem(
      //   "todos",
      //   JSON.stringify(state.todos.map((todo) => todo))
      // );
      persistData(state, "todos")
    },

    //Update todo
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = todo ? action.payload.text : "";
      //save array of todos in localstorage
      // localStorage.setItem(
      //   "todos",
      //   JSON.stringify(state.todos.map((todo) => todo))
      // );
      persistData(state, "todos")
    },

    //Toggle todo state
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = todo ? !todo.completed : "";
      //save array of todos in localstorage
      // localStorage.setItem(
      //   "todos",
      //   JSON.stringify(state.todos.map((todo) => todo))
      // );
      persistData(state, "todos")
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo, updateTodo, toggleTodo } = actions;
export default reducer;
