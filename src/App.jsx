import "./App.css"
import TaskForm from "./components/TaskForm"

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
      <section className='task_column'>1</section>
      <section className='task_column'>2</section>
      <section className='task_column'>3</section>
      </main>
    </div>
  )
}

export default App
