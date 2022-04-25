import { useReducer } from "react";

export default function useCounter({ initial }, reducer) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
