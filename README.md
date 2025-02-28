# MERN-Test-Kartik

This is a simple Todo List application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to add todos with a title and description and displays them in a list.

## How to Run the Project

 git clone https://github.com/kartikgujjar22/MERN-Test-Kartik.git
 cd MERN-Test-Kartik

 navigate to backend folder : cd backend

 Install dependencies : npm install

 Start the backend server: node server.js

 cd ../frontend

 npm install

 npm run dev

## Approach
  # #Backend:

->I used Node.js and Express to create a server.
->MongoDB was used to store todos.
->Two API endpoints were created: one to fetch todos and one to add a new todo.

  # #Frontend:

->I used React to build the user interface.
->The TodoForm component handles adding new todos.
->The TodoList component displays all todos.

# # Integration:

->The frontend communicates with the backend using axios to fetch and add todos.



# # Task answers :

Task 1.1:
Answer: b) useState

Task 1.2:

# # Approach:

Use the useEffect hook to fetch data when the component mounts.
Use the useState hook to manage data, loading, and error states.
Display a loading spinner while fetching data and show an error message if the request fails.

# # Code:
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);// to mange the initial and final state of users 
  const [loading, setLoading] = useState(true);// to manage loading 
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/users')
      .then((response) => {
        setUsers(response.data);// to print the response 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);// this is used to print the error message 
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;// loading is showing on the page if there is any error 

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>// here tthe data is shown 
      ))}
    </ul>
  );
};

export default UserList;

# # Task 1.3
# Code also mentioned in the files frontend/src/Components.Counter.jsx

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;


# #Task 2.1

Answer: b) Parses JSON request bodies


# # Task 2.2
HTTP Method: DELETE
DELETE /api/users/123

{
  "message": "User deleted successfully"
}

# # code:

app.delete('/api/users/:id', async (req, res) => {
// using try and catch because if there are any error present it will detect easy 
  try {
    const userId = req.params.id;
    // Check if the user exists
  const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
  await User.findByIdAndDelete(userId);

  res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



# #Task 2.3

# # Code:
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/status', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


# # Task 3.1

Answer: c) A JSON-like data structure

# #Task 3.2:
const mongoose = require('mongoose');

// Mongoose.schema method is used to create the new mongoose schema with tittle desc and content with date as well
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  content: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', blogPostSchema);


