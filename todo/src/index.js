import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import TodoList from "./components/TodoList";

import { createStore } from "redux";
import { Provider } from "./reducers";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function Index() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
