import React from 'react';
import ReactDOM from 'react-dom';

function Soccer(){
  const shoot = (a,b) => {
    alert(b.type);
  }

  return (
    <button type="button" onClick={(event) => shoot("Goal!", event)}> Take the shot! </button>
  );
}

ReactDOM.render(<Soccer/>, document.getElementById('root'))