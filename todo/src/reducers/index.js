import { combineReducers } from "redux";
import { taskReducer as title } from "./taskReducer";
import { todoReducer as todoList } from "./todoReducer";

export default combineReducers({
  title,
  todoList
});
