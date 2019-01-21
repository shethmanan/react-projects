import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodo extends Component {
    handleSubmit(e){
        e.preventDefault();
        let new_todo = {
            
                id: uuid.v4(),
                name: this.refs.name.value
            
        };
        document.getElementById("todo-name").value = "";

        // console.log(new_todo)
        this.props.addTodo(new_todo);
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <input id="todo-name" ref="name" type="text"/>
              <input type="submit"/>
          </form>
      </div>
    );
  }
}

export default AddTodo;
