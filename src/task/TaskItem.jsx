function TaskItem({ task, onDelete, onEdit, index }) {
  return (
    <li className="flex justify-between items-center bg-white p-3 mb-3 rounded-lg shadow">
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
  );
}

export default TaskItem;
