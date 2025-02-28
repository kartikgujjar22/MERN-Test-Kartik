import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/todos', { title, description });
      setTitle('');
      setDescription('');
      fetchTodos(); // Refresh the todo list
    } catch (err) {
      console.error('Failed to add todo', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;