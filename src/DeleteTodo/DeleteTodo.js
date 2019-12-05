import React from 'react';

const deleteTodo = (props) => {
  return (
    <div className="DeleteTodo" onClick={props.delete} >
      <p>Delete me!</p>
    </div>
  );
}

export default deleteTodo;
