import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = e => {
    this.setState({
      // title: e.target.value -- replaced when we are using forms
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoItemProps(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default InputTodo;
