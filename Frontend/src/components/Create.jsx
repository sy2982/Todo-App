import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

let origin = '<insert backend deployment link here>' //Connect to Backend

function Create({ updateTodos }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAdd = () => {
    const userEmail = localStorage.getItem('userEmail');
    axios.post(`${origin}/add`, { task: task, date: date, userEmail: userEmail })
      .then(result => {
        setTask(''); // Clear input field
        setDate(new Date()); // Reset date
        // Log the result to check if it contains the new todo
        console.log('New todo:', result.data);
        // Update todos state in the parent component
        updateTodos(prevTodos => {
          const updatedTodos = [...prevTodos, result.data];
          // Sort the updated todos
          updatedTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
          return updatedTodos;
        });
      })
      .catch(err => console.log(err));
  };  

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className='create_form'>
      <div className="calendar-container">
        <Calendar onChange={onChange} value={date} className="custom-calendar" />
      </div>
      <div className="input-container">
        <input type="text" placeholder='Enter Something To Do!' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}


export default Create;