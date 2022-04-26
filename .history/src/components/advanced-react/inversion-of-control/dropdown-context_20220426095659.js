import { createContext } from "react";

const DropdownContext = createContext();

const DropdownProvider = (props) => {
  return <DropdownContext.Provider>{props.children}</DropdownContext.Provider>;
};
