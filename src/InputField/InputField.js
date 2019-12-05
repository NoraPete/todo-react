import React from 'react';

const inputField = (props) => {
  return (
     <div className="InputField">
       <form onSubmit={props.submit}>
        <label>
          Register a task
          <input type='text' name='task' />
          <input type='date' name='date' />
        </label>
        <input type='submit' value='Save' />
       </form>
     </div>
  );
}

export default inputField;
