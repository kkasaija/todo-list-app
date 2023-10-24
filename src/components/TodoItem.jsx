import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import EditTodo from "./EditTodo";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false)
  }

  return (
    <>
      {edit ? (
        <EditTodo taskToEdit={todo} cancel={ handleCancel} />
      ) : (
        <li className="flex flex-wrap justify-between items-center border-b mx-2 py-2">
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
          <div className="flex justify-end items-center">
            <button
              className="bg-blue-600 hover:bg-blue-800 text-xs text-white font-bold py-1 px-2 rounded ms-2"
              onClick={handleEdit}
            >
              EDIT
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-600 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded ms-2"
            >
              DELETE
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
