import React, { useContext } from "react";
import "./index.css";
import AppContext from "../../AppContext";

const TodoItem = ({ todo }) => {
  const { todoDone } = useContext(AppContext);
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
