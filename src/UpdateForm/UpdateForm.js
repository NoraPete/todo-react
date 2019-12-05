import React from 'react';

const updateForm = (props) => {
  return (
    <div className="UpdateForm">
      <form onSubmit={props.changeTodo} >
        <input type="text" name="task" defaultValue={props.task} />
        <input type="date" name="date" defaultValue={props.date} />
        <input type="submit" value="update" />
      </form>
    </div>
  );
}

export default updateForm;
