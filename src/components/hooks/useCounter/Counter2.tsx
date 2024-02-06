import React from 'react';
import { useCounter } from './useCounter';

const Counter2 = () => {

    const {count,incrementCounter,decrementCounter} = useCounter({initialCount:0});

  return (
    <div>
        <p>{count}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default Counter2