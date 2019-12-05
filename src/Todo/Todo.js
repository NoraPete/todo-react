import React from 'react';
import UpdateTodo from '../UpdateTodo/UpdateTodo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';

const todo = (props) => {
  return (
    <div className='Todo'>
      <p>{props.date} - {props.task}</p>
      <UpdateTodo update={props.update} />
      <DeleteTodo delete={props.delete} />
    </div>
  );
}

export default todo;
