const { createContext } = require("react");

const AccordionContext = createContext();

const AccordionProvider = (props) => {
  return <AccordionContext.Provider></AccordionContext.Provider>;
};
