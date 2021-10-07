import React from "react";

const TodoItem = ({ todo, todoDone }) => {
  const handleChange = () => {
    todoDone(todo.id);
  };

  return (
    <li className="TodoItem">
      <label>
        <input onChange={handleChange} checked={todo.done} type="checkbox" />
        <span>{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;
