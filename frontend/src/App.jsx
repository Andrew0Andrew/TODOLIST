import {useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle]=useState('')
  const [priority,setPriority]=useState('')
  const [list, setList]=useState([])
  const [checked,setChecked]=useState(false)
  const [record,setRecord]=useState(list)

  const handleSubmit = () => {
    if(title !== '' && priority !== '' && priority > 0){
      const newTodo = {
        title,
        priority,
      };
      setList((prev)=>[...prev, newTodo].sort((a, b) => a.priority - b.priority));
      console.log(list)
      console.log(title,priority)
      setTitle('')
      setPriority('')
    } else {
      console.log('введены не все значения')
      alert('введены не все значения')
    }
  }

  const handleDelete = () => {
    setRecord(
      list.title = null,
      list.priority = null,
    )
  }

  return (
    <div className='todo_list'>
      <h1>TODO LIST</h1>
      <div className='todoform'>
          <input type="text" placeholder='what should we do today?' className='input_task' value={title} onChange={e => setTitle(e.target.value)}/>
          <input type='number' className='input_priority' min={'1'} value={priority} placeholder='priority?' onChange={e => setPriority(e.target.value)}></input>
          <button className='add_task_btn' onClick={handleSubmit}>add task</button>
      </div>

      <div>
        {
          list.map((e)=>{
            return(
              <div className='todo_task' checked={checked} onChange={()=>setChecked(!checked)}>
                <input type="checkbox"/>
                <h1 className='todo_task_priority' style={checked?{textDecoration:'line-through'}:null}>Priority: {e.priority}</h1>
                <h2 className='todo_task_text' style={checked?{textDecoration:'line-through'}:null}>{e.title}</h2>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
