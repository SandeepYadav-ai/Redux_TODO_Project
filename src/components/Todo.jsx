import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../store";
import { useState } from "react";

 export const Todo = ()=> {
    const [task, setTask] = useState("");

    const tasks = useSelector((state)=> state.task);

    const dispatch = useDispatch();

    //handle form
    const handleFormSubmit = (e)=> {
      e.preventDefault();
      dispatch(addTask(task));
      return setTask("");
    };

    //handle delete
    const handleTaskDelete = (id)=> {
      return dispatch(deleteTask(id))
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          My Todo List
        </h1>

        <form onSubmit={handleFormSubmit} className="mb-6 flex gap-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Add
          </button>
        </form>

        <ul className="space-x-3">
          {
            tasks.map((currI, index)=> {
                return <li key={index}
                        className="flex items-center justify-between gap-20 p-3 text-black"
                        >
                    <p>
                        {index}: {currI}
                    </p>
                    <div>
                    <MdDeleteForever size={22} 
                    onClick={() => handleTaskDelete(index)}
                    className="cursor-pointer rounded-lg bg-red-500 p-1 text-white transition hover:bg-red-600"
                    title="Delete task"
                    />
                  </div>
                </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};
