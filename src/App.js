import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mx-auto ">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
