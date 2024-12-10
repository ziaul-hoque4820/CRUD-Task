import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskComponent({ tasks, onAdd, onDelete, onEdit, taskToEdit, onUpdate, onClear }) {
  return (
    <div className="max-w-7xl mx-auto my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <TaskForm onAdd={onAdd} taskToEdit={taskToEdit} onUpdate={onUpdate} />
      </div>
      <div className="md:col-span-2">
        <TaskList tasks={tasks} onDelete={onDelete} onEdit={onEdit} onClear={onClear} />
      </div>
    </div>
  );
}

export default TaskComponent;
