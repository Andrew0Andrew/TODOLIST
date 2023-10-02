import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle]=useState('')
  const [priority,setPriority]=useState('')
  const [list, setList]=useState([])

  const handleSubmit = () => {
    if(title !== '' && priority !== '' && priority > 0){
      const newTodo = {
        title,
        priority,
      };
      setList((prev)=>[...prev, newTodo].sort((a, b) => a.priority - b.priority));
      console.log(title,priority)
      setTitle('')
      setPriority('')
    } else {
      console.log('введены не все значения')
      alert('введены не все значения')
    }
  }


  return (
    <div className='todo_list'>
      <h1>TODO</h1>
      <div className='todoform'>
          <input type="text" placeholder='what should we do today?' className='input_task' value={title} onChange={e => setTitle(e.target.value)}/>
          <input type='number' className='input_priority' min={'1'} value={priority} onChange={e => setPriority(e.target.value)}></input>
          <button className='add_task_btn' onClick={handleSubmit}>add task</button>
      </div>

      <div>
        {
          list.map((e)=>{
            return(
              <div>
                <h1>{e.priority} {e.title}</h1>
              </div>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default App
