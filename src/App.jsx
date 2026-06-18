import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("myTask");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("myTask", JSON.stringify(tasks))
  })

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }


  return (
    <div className="min-h-screen bg-slate-50 flex justify-center pt-16 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 h-fit border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">Todo List</h1>

      <div className="flex gap-2 mb-6">
        <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all"
      />
      <button
        onClick={addTask}
        className="bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg px-5 py-2.5 transition-colors shadow-sm"
        >
        Add
      </button>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        {tasks.length === 0 ? (
          <p>Your todo list is empty!, put any task</p>
        ) : (
          <div className="bg-slate-50/50 rounded-xl p-2 border-slate-100 space-y-2">
            {tasks.map((item, index) => (
              <div key={index}
              className="flex justify-between items-center bg-white border border-slate-200/60 px-4 py-3 rounded-lg shadow-sm hover:sky-200 transition-all group">
                <div>
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default App;
