import React from "react";
import TodoList from "./components/TodoList";

const todo = {
  done: false,
  text: "Study ReactJS",
};

const App = () => {
  return (
    <div>
      <TodoList todo={todo} />
      <TodoList todo={{done: true, text: "Drink coffee"}} />
    </div>
  );
};

export default App;
