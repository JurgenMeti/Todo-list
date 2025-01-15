import { useState } from "react"
import "./App.css"
import TaskColumn from "./components/TaskColumn"
import TaskForm from "./components/TaskForm"
import todoIcon from "./assets/approved.png"
import doingIcon from "./assets/coming-soon.png"
import doneIcon from "./assets/trophy.png"

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks }/>
      <main className='app_main'>
      <TaskColumn title="To do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete} />
      <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete} />
      <TaskColumn title="Done" icon={doneIcon} tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App
