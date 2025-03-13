import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => { // destructuring assignment of the props object
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //because it loads the page when the form is submitted
        if (value) {
          // add todo
          addTodo(value); //clears the input field after submitting the form
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}