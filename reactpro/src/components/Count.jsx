import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(1);

  function incrementClick() {
    setCount(count + incrementCount);
  }

  function decrementClick() {
    setCount(count - incrementCount);
  }

  function increaseIncrement() {
    setIncrementCount(incrementCount + 1);
  }

  function decreaseIncrement() {
    setIncrementCount(incrementCount - 1);
  }
  return (
    <div>
      <h1>Count number is:{count}</h1>

      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>

      <h2>Increase Increment {incrementCount}</h2>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
