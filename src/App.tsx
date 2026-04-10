import './App.css'

import TaskList from "./components/TaskList";
import Error from "./components/Error";
import { useTasks } from './hooks/useTask';
import TaskForm from './components/TaskForm';
import Loader from './components/Loader';



function App() {
  const { tasks, loading, error, completeTasks, deleteTask, clearError, createTask } = useTasks();
  console.log(error);

  return (
    <>
      {loading ? <Loader/> : <>
        <Error message={error} onClose={clearError} />

        <TaskForm onAdd={createTask}/>

        <div style={{ maxWidth: "500px", margin: "50px auto" }}>
          <h1>Task Manager</h1>

          <TaskList completeTask={completeTasks} deleteTask={deleteTask} tasks={tasks} />
        </div>
      </>}
    </>
  );
}

export default App;

