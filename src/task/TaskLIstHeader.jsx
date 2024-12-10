function TaskListHeader({ onClear }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Task List</h2>
      <button
        onClick={onClear}
        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Clear All
      </button>
    </div>
  );
}

export default TaskListHeader;
