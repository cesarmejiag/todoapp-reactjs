import React from "react";

const TodoStatus = ({ todos }) => {
  const remaining = todos.filter((todo) => !todo.done);

  return (
    <div>
      Remaining todos {remaining.length} / {todos.length}
    </div>
  );
};

export default TodoStatus;
