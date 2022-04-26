import { createContext, useContext } from "react";

const DropdownContext = createContext();

const DropdownProvider = (props) => {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
};

export { useContext, DropdownProvider };
