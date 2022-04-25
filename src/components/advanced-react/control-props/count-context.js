import { createContext, useContext } from "react";

const CountContext = createContext(undefined);

const CountProvider = ({ value, ...props }) => {
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw Error("useCount must be used within CountProvider");
  return context;
};

export { useCount, CountProvider };
