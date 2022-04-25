import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      break;
  }
};

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
