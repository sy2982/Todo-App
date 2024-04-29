import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import QuoteOfTheDay from './QuoteOfTheDay';
import auth from './Auth'; // Import the auth module

let origin = '<insert backend deployment link here>' //Connect to Backend

function Home() {
  const navigate = useNavigate(); // Initialize navigate function for redirection

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail'); // Retrieve user's email
    axios.get(`${origin}/get?userEmail=${userEmail}`) // Pass userEmail as query parameter
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);  

  const handleEdit = (id) => {
    axios.put(`${origin}/update/` + id)
      .then(result => {
        setTodos(prevTodos => {
          return prevTodos.map(todo => {
            if (todo._id === id) {
              return { ...todo, done: !todo.done };
            } else {
              return todo;
            }
          });
        });
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`${origin}/delete/` + id)
      .then(result => {
        // Filter out the deleted todo from the list
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };  
  
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user from Firebase
      console.log('Successfully logged out');
      navigate('/'); // Redirect to the login page after sign-out
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='home'>
      <div className='title'>
        <h2>To Do App</h2>
      </div>

      <QuoteOfTheDay />

      <Create updateTodos={setTodos} />

      <br />
      {
        todos.length === 0
          ? <div className='no_entry'>
            <h2>You Have Nothing To Do!</h2>
            <p>Please add something...</p>
          </div>
          : todos.map(todo => (
            <div className='task' key={todo._id}>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                  : <BsCircleFill className='icon' />}
                <p className={todo.done ? "line_through" : ""}>{todo.task} - {new Date(todo.date).toLocaleDateString()}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
              </div>
            </div>
          ))
      }
      <div className='logout'>
      <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;