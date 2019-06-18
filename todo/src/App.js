import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./components/TodoList";

function app1() {
  return (
    <div className="App">
      <h3>To-Do List from App.js</h3>
      <TodoList />
    </div>
  );
}

export default app1;
