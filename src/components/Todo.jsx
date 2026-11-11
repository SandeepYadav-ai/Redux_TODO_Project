 export const Todo = ()=> {
    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          My Todo List
        </h1>

        <form className="mb-6 flex gap-3">
          <input
            type="text"
            //value={task}
            //onChange={(e) => setTask(e.target.value)}
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
{/* 
        <ul className="space-y-3">
          {tasks.map((currTask) => (
            <li
              key={currTask.id}
              className="flex items-center justify-between gap-3 rounded-lg bg-gray-100 p-4"
            >
              <span className="break-all text-gray-800">
                {currTask.text}
              </span>

              <button
                //onClick={() => deleteTask(currTask.id)}
                className="shrink-0 rounded-md bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}

        {/* {tasks.length === 0 && (
          <p className="py-5 text-center text-gray-400">
            No tasks added yet!
          </p>
        )} */}

      </div>
    </div>
  );
};
