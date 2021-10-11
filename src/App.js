import React, { useState } from "react";
import AppContext from "./AppContext";
import TodoStatus from "./components/TodoStatus";
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
  const archive = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <div>
      <AppContext.Provider value={{ todoDone }}>
        <TodoStatus todos={todos} archive={archive} />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </AppContext.Provider>
    </div>
  );
};

export default App;
