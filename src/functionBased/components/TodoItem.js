import React, { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";

import styles from'./TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    };
  };

  const { completed, id, title } = props.todo;
  let viewMode = {};
  let editMode = {};

  if (editing) {
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
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash 
            style={{ color: "orangered", fontSize: "16px" }}
          />
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
          props.setUpdateProps(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;

// When you use the Destructuring you need to create a const { nameStates1,
//nameState2,... }, and remove this.props.< the parent state >
