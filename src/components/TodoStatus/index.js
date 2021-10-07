import React from "react";

const TodoStatus = ({ todos, archive }) => {
  const remaining = todos.filter((todo) => !todo.done);

  return (
    <div>
      Remaining todos {remaining.length} / {todos.length} [
      <button onClick={archive}>Archive</button>]
    </div>
  );
};

export default TodoStatus;
