import React from "react";
import Counter from "./components/advanced-react/state-reducer/Counter";
import useCounter from "./components/advanced-react/state-reducer/useCounter";

const App = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();
  return (
    <div>
      <Counter count={count}></Counter>
    </div>
  );
};

export default App;
