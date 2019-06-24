import React, { Component } from "react";

const TodoList = props => {
  return (
    <div className="form">
      <input
        name="todoText"
        type="text"
        value={props.todoText}
        onChange={props.changeHandler}
        placeholder="Add Todo Here"
      />
      <button onClick={props.addTodo}>Add Task</button>
    </div>
  );
};

export default TodoList;
