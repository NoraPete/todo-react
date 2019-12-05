import React from 'react';

const updateTodo = (props) => {
  return (
    <div className="UpdateTodo" onClick={props.update}>
       <p>Update me!</p>
    </div>
  );
}

export default updateTodo;
