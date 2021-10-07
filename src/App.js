import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
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
  const addTodo = (newTodo) => {
    setTodos(todos.concat([newTodo]));
  };
  const todoDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }

        return todo;
      })
    );
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} todoDone={todoDone} />
    </div>
  );
};

export default App;
