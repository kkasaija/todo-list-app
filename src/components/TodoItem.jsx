import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center border-b">
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          className="mr-2"
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span
          style={
            todo.completed
              ? { textDecoration: "line-through", background: "gray" }
              : {}
          }
        >
          {todo.text}
        </span>
      </div>
      {/* <input type="text" value={todo.text} /> */}
      <div className="flex justify-end items-center">
        <button className="bg-blue-400 hover:bg-blue-500 text-xs text-white font-bold py-1 px-2 rounded my-2 mx-2">
          EDIT
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-400 hover:bg-red-500 text-xs text-white font-bold py-1 px-2 rounded my-2 mx-2"
        >
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
