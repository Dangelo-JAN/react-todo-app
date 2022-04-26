import React, { Component } from 'react';

import styles from'./TodoItem.module.css';

class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      this.setState({ editing: false });
    };
  };

  render() {
    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    };

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdateProps(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;

// When you use the Destructuring you need to create a const { nameStates1,
//nameState2,... }, and remove this.props.< the parent state >
