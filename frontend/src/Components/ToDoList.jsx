import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;