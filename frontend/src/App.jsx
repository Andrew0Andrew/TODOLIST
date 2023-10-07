import {useState } from 'react'
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableTask } from './DragableTask';
function App() {
  const [title, setTitle]=useState('')
  const [priority,setPriority]=useState('')
  const [list, setList]=useState([])

  const handleSubmit = () => {
    if(title !== '' && priority !== '' && priority > 0){
      const newTodo = {
        title,
        priority,
        checked: false,
      };
      setList((prev)=>[...prev, newTodo].sort((a, b) => a.priority - b.priority));
      setTitle('')
      setPriority('')
    } else {
      console.log('введены не все значения')
      alert('введены не все значения')
    }
  }

  const handleLineThrough = (id) => {
    let newList = [...list];
    newList[id].checked = !newList[id].checked;
    setList(newList);
  }

  const handleDeleteTask = (index) => {
    let newList = [...list];
    newList = newList.filter((e) => e !== null);
    const indexOfTaskToDelete = newList.indexOf(list[index]);
    newList.splice(indexOfTaskToDelete, 1);
    setList(newList);
  };
  
  return (
    <div className='todo_list'>
      <h1>TODO LIST</h1>
      <div className='todoform'>
          <input type="text" placeholder='what should we do today?' className='input_task' value={title} onChange={e => setTitle(e.target.value)}/>
          <input type='number' className='input_priority' min={'1'} value={priority} placeholder='priority?' onChange={e => setPriority(e.target.value)}></input>
          <button className='add_task_btn' onClick={handleSubmit}>add task</button>
      </div>

      <div>
        {list.map((el, i) => {
          return el !== null ? (
            <DraggableTask
              key={i}
              task={el}
              index={i}
              moveTask={(fromIndex, toIndex) => {
                const newList = [...list];
                const [movedTask] = newList.splice(fromIndex, 1);
                newList.splice(toIndex, 0, movedTask);
                setList(newList);
              }}
              handleLineThrough={handleLineThrough}
              handleDeleteTask={handleDeleteTask}
            />
          ) : (
            <></>
          );
        })}
      </div>    
>>>>>>> 6bb0aed3cbe41f390830c300e2365fab8db744a2
    </div>
  )
}

export default function WrappedApp() {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
}