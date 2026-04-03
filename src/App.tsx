import React, { useMemo, useState } from 'react'
import useCounter from './hooks/useCounter';

const  inputHandler = (value:any) => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++){
    sum+=1
  }
  return value
}
const App = () => {
 const { count, increment, decrement, reset } =  useCounter()
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App