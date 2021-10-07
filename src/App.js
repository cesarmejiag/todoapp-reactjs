import React, { useState } from "react";
import TodoList from "./components/TodoList";

const initTodos = [
  {
    id: 1,
    done: false,
    text: "Study ReactJS",
  },
];

const App = () => {
  const [todos, setTodos] = useState(initTodos);
  const handleClick = () => {
    setTodos(todos.concat([{ id: Date.now(), done: false, text: "Drink Coffee" }]));
  };

  return (
    <div>
      <button onClick={handleClick}>Add todo</button>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
