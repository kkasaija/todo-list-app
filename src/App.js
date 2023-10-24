import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="container mx-auto">
      <AddTodo />
      {/* <EditTodo /> */}
      <TodoList />
    </div>
  );
}

export default App;
