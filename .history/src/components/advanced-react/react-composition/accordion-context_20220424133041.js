const { createContext, useContext } = require("react");
const { default: useToogle } = require("./useToggle");

const AccordionContext = createContext();

const AccordionProvider = (props) => {
  const { value: show, handleToggle: handleToggleShow } = useToogle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={values}
      {...props}
    ></AccordionContext.Provider>
  );
};

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (typeof context == "undefined")
    throw new Error("useAccordion must be used within AccordionProvider");
  return context;
};
