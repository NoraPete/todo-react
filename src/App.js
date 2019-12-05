import React, { Component } from 'react';
import './App.css';
import InputField from './InputField/InputField';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: []
  }

  submitHandler = (event) => {
    event.preventDefault();
    let tds = [...this.state.todos];
    let newId;
    if (tds.length > 0) {
      newId = tds[tds.length - 1].id + 1
    } else {
      newId = 1;
    }
    let newTodo = {
      id: newId,
      date: event.target.date.value,
      task: event.target.task.value,
      toBeUpdated: false
    }
    tds.push(newTodo);
    this.setState({
      todos: tds
    });
    event.target.reset();
  }

  updateHandler = (event, id) => {
    let tds = [...this.state.todos];
    for (let i = 0; i < tds.length; i ++) {
      if (tds[i].id === id) {
        tds[i].toBeUpdated = true;
      }
    }
    this.setState({
      todos: tds
    });
  }

  changeTodoHandler = (event, id) => {
    event.preventDefault();
    let tds = [...this.state.todos];
    for (let i = 0; i < tds.length; i ++) {
      if (tds[i].id === id) {
        tds[i].date = event.target.date.value;
        tds[i].task = event.target.task.value;
        tds[i].toBeUpdated = false;
      }
    }
    this.setState({
      todos: tds
    });
  }

  deleteHandler = (event, id) => {
    let tds = [...this.state.todos];
    for (let i = 0; i < tds.length; i ++) {
      if (tds[i].id === id) {
        tds.splice(i, 1);
      }
    }
    this.setState({
      todos: tds
    });
  }

  render() {
    return (
      <div className="App">
        <InputField submit={this.submitHandler} />
        <TodoList 
        todos={this.state.todos}
        update={this.updateHandler}
        delete={this.deleteHandler}
        changeTodo={this.changeTodoHandler} />
      </div>
    );
  }
}

export default App;
