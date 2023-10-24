import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteAllTodos } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.length ? (
        <ul className="container mx-auto">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          <div className="flex justify-center items-center py-2">
            <button
              className=" bg-red-600 hover:bg-red-800 text-xs w-1/4 text-white font-bold py-1 px-2 rounded ms-2"
              onClick={(e) => dispatch(deleteAllTodos())}
            >
              DELETE ALL
            </button>
          </div>
        </ul>
      ) : (
        <div className="flex justify-center items-center mt-8">
          <p className="text-red italic text-base font-semibold text-blue-600">
            Nothing to display. Add atleast one item
          </p>
        </div>
      )}
    </>
  );
};

export default TodoList;
