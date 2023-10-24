import { updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditTodo = ({ taskToEdit, cancel }) => {
  const [update, setUpdate] = useState({ ...taskToEdit });
  console.log(update);
  const dispatch = useDispatch();

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo(update));
    setUpdate("");
    cancel();
  };

  return (
    <>
      <form onSubmit={updateTodoHandler} className="flex justify-between items-center border-b w-full">
        <input
          type="text"
          name="update"
          value={update.text}
          onChange={(e) => setUpdate({ ...update, text: e.target.value })}
          className="mb-1 mr-4 w-3/4 border rounded outline-0 py-1 text-sm px-1"
        />
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-xs text-white font-bold py-1 px-2 mx-2 rounded my-2"
          >
            SAVE
          </button>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded my-2 mx-2"
            onClick={() => cancel()}
          >
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

export default EditTodo;
