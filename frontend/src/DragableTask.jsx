import { useDrag, useDrop } from 'react-dnd';
import './App.css'

export const DraggableTask = ({ task, index, moveTask, handleLineThrough, handleDeleteTask }) => {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className='todo_task'>
      <input
        type="checkbox"
        className='checkbox_btn'
        checked={task.checked}
        onChange={() => handleLineThrough(index)}
      />
      <h1 className='todo_task_priority' style={task.checked ? { textDecoration: 'line-through' } : null}>
        Priority: {task.priority}
      </h1>
      <h2 className='todo_task_text' style={task.checked ? { textDecoration: 'line-through' } : null}>
        {task.title}
      </h2>
      <button className='delete' onClick={() => handleDeleteTask(index)}>
        Delete
      </button>
    </div>
  );
};

