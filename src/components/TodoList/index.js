import React, { useEffect } from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos }) => {
  useEffect(() => {
    console.log("TodoList mount");
    return () => {
      console.log("TodoList unmount");
    };
  });

  return (
    <ul className="TodoList">
      <TodoItem todo={todos[0]} />
    </ul>
  );
};

export default TodoList;
