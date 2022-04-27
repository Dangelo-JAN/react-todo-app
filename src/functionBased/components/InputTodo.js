import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons"

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoItemProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <IconContext.Provider
        value={{
          color: "#042B94",
          style: { fontSize: "20px", color: "#042B94" },
          className: "submit-iconn",
        }}
      >
        <button className="input-submit">
          <FaPlusCircle />
        </button>
      </IconContext.Provider>
    </form>
  )
}

export default InputTodo
