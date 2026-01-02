import "./App.css"
import { useState } from "react"
const App = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const submitNewTask = () => {
    if(newTask.trim() === " ")return;

    const newTasks = {
      id:Date.now,
      text: newTask
    };

    setTasks([...tasks, newTasks])
    setNewTask('')
    // console.log(newTask);

  }


  return (

    <div>
        <div>
          <input
             type="text"
             value={newTask}
             onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={submitNewTask}>Submit</button>
        </div>
        <div>
          <ul>{tasks.map((task) => (
            <li>{task.text}</li>
          ))}</ul>
        </div>
    </div>
  )
}

export default App