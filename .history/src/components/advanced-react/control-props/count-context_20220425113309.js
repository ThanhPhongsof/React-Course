import { createContext, useContext } from "react";

const CountContext = createContext(undefined);

const CountProvider = (props) => {
  return <CountContext.Provider {...props}></CountContext.Provider>;
};

const useCount = () => {
  const context = useContext(CountContext);
};
