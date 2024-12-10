import { useEffect, useState } from 'react';

function TaskForm({ onAdd, taskToEdit, onUpdate }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (taskToEdit) {
      onUpdate({ ...taskToEdit, text });
    } else {
      onAdd({ id: crypto.randomUUID(), text });
    }
    setText('');
  };

  return (
    <div className="bg-slate-300 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Task Form</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Enter your task"
      />
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
}

export default TaskForm;
