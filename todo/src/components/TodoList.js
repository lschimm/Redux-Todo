import React, { Component } from "react";

const TodoList = props => {
  return (
    <div className="form">
      <input
        name="todoText"
        value={props.todoText}
        type="text"
        onChange={props.changeHandler}
        placeholder="Add Todo Here"
      />
      <button onClick={props.addTodo}>Add Task</button>
    </div>
  );
};

export default TodoList;
