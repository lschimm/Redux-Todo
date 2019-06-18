import React from "react";
import { connect } from "react-redux";
import { addNewTask, toggleTask } from "../actions";

class TodoList extends React.Component {
  state = {
    newTask: ""
  };

  handleChanges = e => {
    this.setState({ newTask: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  toggleTask = (e, index) => {
    e.preventDefault();
    this.props.toggleTask(index);
  };

  render() {
    return (
      <React.Fragment>
        <div className="task-list">
          {this.props.tasks.map((task, index) => (
            <h3 onClick={e => this.toggleTask(e, index)} key={index}>
              {task.name}
              {task.taskStatus && <i class="fas fa-check" />}
            </h3>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChanges}
          placeholder="Add new task"
        />
        <button onClick={this.addTask}>Add Task</button>
      </React.Fragment>
    );
  }
}

export default TodoList;
