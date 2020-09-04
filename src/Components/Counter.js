import React from 'react';

function Counter({initialCount}){
    const [count, setCount] = React.useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </>
    );
  }
  export default Counter;