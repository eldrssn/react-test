import React, {useState} from 'react';

const Counter = () => {
  let [count, setCount] = useState(0)
  
  function increment() {
    setCount(count++);
  }

  function decrement() {
    setCount(count--);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {increment}>+</button>
      <button onClick = {decrement}>-</button>
    </div>
  );
};

export default Counter;