import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const todos = [
  {
    done: false,
    text: "Study ReactJS",
  },
];

const App = () => {
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    console.log("App mount or update");
  }, [visible]);

  return (
    <div>
      <button onClick={handleClick}>Show / Hide</button>
      {visible && <TodoList todos={todos} />}
    </div>
  );
};

export default App;
