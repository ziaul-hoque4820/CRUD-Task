import { useState } from "react"
import TaskComponent from "./task/TaskComponent"
import { initialTasks } from "./data/initialTasks"



function App() {
  
  const [tasks, setTasks] = useState(initialTasks);
  const [taskToEdit, setTaskToEdit] = useState()
  
  
  // Add Task Handler 
  const addTaskHandler = (task) => {
    setTasks([
      ...tasks,
      task
    ]) 
  }

  // Delet Item 
  const deletehandler = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Edit Handeler 
  const editHandler = (task) => {
    setTaskToEdit(task);
  }

  // Update Handeler 
  const updateHandelar = (update) => {
    setTasks(tasks.map(task => {
      if(task.id === update.id){
        return update;
      }else {
        return task;
      }
    }))
    setTaskToEdit(null)
  }

  // Clear Task Handelar 
  const clearHandler = () => {
    setTasks([]);
  }

  return (
    <>
      <TaskComponent tasks={tasks} onAdd={addTaskHandler} onDelete={deletehandler} onEdit={editHandler} taskToEdit={taskToEdit} onUpdate={updateHandelar} onClear={clearHandler} />
    </>
  )
}

export default App
