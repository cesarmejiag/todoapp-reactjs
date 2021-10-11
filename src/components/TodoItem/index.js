import React, { useContext } from "react";
import AppContext from "./../../AppContext";
import "./index.css";

const TodoItem = ({ todo }) => {
  const { todoDone } = useContext(AppContext);
  const handleChange = () => {
    todoDone(todo.id);
  };

  return (
    <li className="TodoItem">
      <label className={todo.done ? "todo-done" : ""}>
        <input onChange={handleChange} checked={todo.done} type="checkbox" />
        <span>{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;
