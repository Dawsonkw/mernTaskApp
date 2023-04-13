import { useEffect, useState } from 'react'
import './App.css'
import readTaskReq from './api/readTaskReq'
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTaskReq.getAllTasks().then(allTasks => setTasks(allTasks))
  }, []);

  const handleTaskCreated = () => {
    readTaskReq.getAllTasks().then(allTasks => setTasks(allTasks));
  }


  return (
    <div className="App">
      <Tasks tasks={tasks} onTaskCreated={handleTaskCreated} />
    </div>
  )
}

export default App
