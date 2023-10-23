import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodoHandler} className="flex justify-center">
        <input
          type="text"
          name="input"
          value={input}
          required
          onInput={(e) => setInput(e.target.value)}
          className="my-4 mr-2 w-1/2 border rounded outline-0 py-1 text-sm px-1"
          placeholder="Add Todo Task"
          maxLength={50}
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded my-4"
        >
          &#43;
        </button>
      </form>
      <hr className="h-px mb-1 text-xs border-0 bg-violet-400 drop-shadow-lg" />
    </>
  );
};

export default AddTodo;
