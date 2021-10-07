import React from "react";

const TodoList = ({todo}) => {
  return (
    <ul className="TodoList">
      <li className="TodoItem">
        {todo.text} - {todo.done ? "Done" : "Pending"}
      </li>
    </ul>
  );
};

export default TodoList;
