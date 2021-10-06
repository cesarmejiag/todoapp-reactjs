import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const todo = {
  done: false,
  text: "Study ReactJS",
};

setInterval(() => {
  let time = new Date();

  ReactDOM.render(
    <>
      <div>{time.toLocaleString()}</div>
      <ul>
        <li className="TodoItem">
          {todo.text} - {todo.done ? "Done" : "Pending"}
        </li>
      </ul>
    </>,
    document.getElementById("root")
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
