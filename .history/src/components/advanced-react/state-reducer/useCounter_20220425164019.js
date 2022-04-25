import { useReducer } from "react";

export default function useCounter({ initial }, reducer) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });

  return {
    count,
  };
}
