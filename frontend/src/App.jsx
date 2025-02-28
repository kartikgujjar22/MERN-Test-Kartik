import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Counter from './Components/Counter';
import TodoForm from './Components/ToDoForm';
import TodoList from './Components/ToDoList';
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (err) {
      console.error('Failed to fetch todos', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
     <div>
      <h1>React Counter App</h1>
      <Counter />
    </div>

    <div>
      <h1>Todo List App</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} />
    </div>
    </>
  )
}

export default App
