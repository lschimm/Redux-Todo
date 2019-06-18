import React from "react";
import { connect } from "react-redux";

import { updateTodo } from "../actions";

class Title extends React.Component {
  state = {
    newTitleText: this.props.title,
    editing: false
  };
}

export default Title;
