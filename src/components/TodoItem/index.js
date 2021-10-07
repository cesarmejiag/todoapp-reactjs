import React from "react";
import "./index.css";

const TodoItem = ({ todo, todoDone }) => {
  const handleChange = () => {
    todoDone(todo.id);
  };

  return (
    <li className="TodoItem">
      <label className={ todo.done ? 'todo-done' : '' }>
        <input onChange={handleChange} checked={todo.done} type="checkbox" />
        <span>{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;
