import { createContext } from "react";

const DropdownContext = createContext();

const DropdownProvider = (props) => {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
};
