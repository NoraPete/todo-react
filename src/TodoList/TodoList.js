import React from 'react';
import Todo from '../Todo/Todo';
import UpdateForm from '../UpdateForm/UpdateForm';

const todoList = (props) => {
  const tdList = props.todos.map(todo => {
    if (todo.toBeUpdated) {
      return (
      <UpdateForm 
      key={todo.id.toString()} 
      changeTodo={(event) => props.changeTodo(event, todo.id)}
      task={todo.task}
      date={todo.date} />
      );
    }
    return (
      <Todo 
      key={todo.id.toString()} 
      date={todo.date} 
      task={todo.task} 
      update={(event) => props.update(event, todo.id)} 
      delete={(event) => props.delete(event, todo.id)} />
    );
  });
  return (
    <div className='TodoList'>
      {tdList}
    </div>
  );
}

export default todoList;
