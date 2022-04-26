import React, { Component } from 'react';

import styles from'./TodoItem.module.css';

class TodoItem extends Component {
  render() {
    const { completed, id, title } = this.props.todo;

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    return (
      <li className={styles.item}>
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
      </li>
    );
  }
}

export default TodoItem;

// When you use the Destructuring you need to create a const { nameStates1,
//nameState2,... }, and remove this.props.< the parent state >
