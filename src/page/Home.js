import {Link} from 'react-router-dom';
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState, Component } from "react";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
         <li className="nav-item">
            <Link className="nav-link navcolor" to="/About">Informações</Link>
    </li>
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Tarefas
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>

    </div>
  );
}

export default Home