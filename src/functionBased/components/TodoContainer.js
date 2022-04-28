import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import Navbar from './Navbar';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }
  
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos]);

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (
    <>
      <Navbar />
      <switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoItemProps={addTodoItem}/>
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={deleteTodo}
                setUpdateProps={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* Way to know the path, url and the params in the console int the match
        <Route path="/about" component={About} /> */}
        <Route path="*">
          <NotMatch />
        </Route>
      </switch>
    </>
  );
}

export default TodoContainer;
