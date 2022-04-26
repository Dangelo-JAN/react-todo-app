import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  state = {
    todos: [],
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
  // You can also remove this ^ parenthesis and use return statement
  // return {
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
      // } close the bracket
  // v and remove that bracket  -- both methods work fine
    }));
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={this.addTodoItem}/>
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            setUpdateProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
