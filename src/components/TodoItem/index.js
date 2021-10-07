import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li className="TodoItem">
      {todo.text} - {todo.done ? "Done" : "Pending"}
    </li>
  );
};

export default TodoItem;
