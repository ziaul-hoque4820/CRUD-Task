function TaskList({ tasks, onDelete, onEdit, onClear }) {
  return (
    <div className="bg-slate-300 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Task List</h2>
        <button
          onClick={onClear}
          className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white p-3 mb-3 rounded-lg shadow"
          >
            <div className="flex items-center">
              <span className="font-bold text-lg mr-4">{index + 1}</span>
              <p>{task.text}</p>
            </div>
            <div>
              <button
                onClick={() => onEdit(task)}
                className="py-1 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="py-1 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
