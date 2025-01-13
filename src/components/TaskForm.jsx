import Tag from "./Tag"
import "./TaskForm.css"

const TaskForm = () => {
  return (
    <header className='app_header'>
        <form>
            <input type="text" className="task_input" placeholder='Enter the task' />
            <div className='task_bottom_line'>
                <div>
                <Tag />
                </div>

                <div>
                <select className="task_status">
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type="submit" className="task_submit">Add task</button>
                </div>

                
            </div>
        </form>
    </header>
  )
}

export default TaskForm
