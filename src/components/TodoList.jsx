import { useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="container mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b"
          >
            {todo.text}
            <input type="text" value={todo.text} />
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
        ))}
      </ul>
    </>
  );
};

export default TodoList;
