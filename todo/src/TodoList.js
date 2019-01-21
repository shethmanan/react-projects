import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    let todo_list_component;
    if(this.props.todo_list){
        todo_list_component = this.props.todo_list.map(item => {
            return(
                <TodoItem key={item.id} name={item.name}/>
            );
        });
    }
    return (
      <div className="TodoList">
        {todo_list_component}       
      </div>
    );
  }
}

export default TodoList;
