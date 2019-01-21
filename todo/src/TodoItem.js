import React, { Component } from 'react';


class TodoItem extends Component {
  render() {
    return (
      <li className="TodoItem">
        {this.props.name} <span> x</span>
      </li>
    );
  }
}

export default TodoItem;
