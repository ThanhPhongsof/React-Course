const { createContext } = require("react");

const AccordionContext = createContext();

const AccordionProvider = (props) => {
  return (
    <AccordionContext.Provider
      value={{}}
      {...props}
    ></AccordionContext.Provider>
  );
};
