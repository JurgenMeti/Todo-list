import { useState } from "react"
import Tag from "./Tag"
import "./TaskForm.css"

const TaskForm = () => {
//grupohen useState per sa koh qe i jep emer tek perdorimet
  const [taskData, settaskData] = useState({
    task: "",
    status:"todo"
  });
  const handleChange = (e) => {
    const {name,value} = e.target;

    settaskData(prev => {
      return {...prev, [name]:value}
    })
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(taskData);
  }
  

  // const [task, setTask] = useState('');
  // const [status, setStatus] = useState('todo');   

  // const handleTaskChange = e =>{
  //   setTask(e.target.value)
  // }

  // const handleStatusChange = e =>{
  //   setStatus(e.target.value)
  // }
  // console.log(task, status);
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="task" 
            className="task_input" 
            placeholder='Enter the task' 
            onChange={handleChange}/>

            <div className='task_bottom_line'>
                <div>
                <Tag tagName="HTML" />
                <Tag tagName="CSS" />
                <Tag tagName="JavaScript" />
                <Tag tagName="React" />
                </div>

                <div>
                <select name="status" 
                className="task_status" 
                onChange={handleChange}>
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
