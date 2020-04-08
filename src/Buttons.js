import React from 'react';


export default function () {
  return (
    <div>
      <p>
        <button onClick={() => this.handleClick('Wahoo')}>
          Click me
            </button>
        <button onClick={() => this.handleClick('Wahey')}>
          Or me
            </button>
        <button onClick={() => this.handleClick('Wahey')}>
          Or me
            </button>
      </p>
    </div>
  );
}


