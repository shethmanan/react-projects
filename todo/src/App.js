import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos : []
    }
  }

  componentWillMount(){
    // this.state.todos = {}
    this.setState({
      todos : [
        {id: uuid.v4(),
        name: "This is your first to-do"},
        {id: uuid.v4(),
        name:"This is your second to-do"},
        {id: uuid.v4(),
        name:"This is your third to-do"}
      ]
    });
  }
  handleNewTodo(new_todo){
    console.log(new_todo);
    let todos = this.state.todos;
    todos.push(new_todo);
    this.setState({todos:todos});
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.handleNewTodo.bind(this)}/>
        <TodoList todo_list={this.state.todos}/>
      </div>
    );
  }
}

export default App;
