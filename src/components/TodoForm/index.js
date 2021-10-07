import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (ev) => {
    setText(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (text.length > 0) {
      const newTodo = { id: Date.now(), done: false, text: text };
      setText("");
      addTodo(newTodo);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="New todo"
        type="text"
        value={text}
      />
      <button disabled={text.length <= 0}>Add todo</button>
    </form>
  );
};

export default TodoForm;
