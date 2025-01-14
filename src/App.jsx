import "./App.css"
import TaskColumn from "./components/TaskColumn"
import TaskForm from "./components/TaskForm"
import todoIcon from "./assets/approved.png"
import doingIcon from "./assets/coming-soon.png"
import doneIcon from "./assets/trophy.png"

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
      <TaskColumn title="To do" icon={todoIcon}/>
      <TaskColumn title="Doing" icon={doingIcon}/>
      <TaskColumn title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App
