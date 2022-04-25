const { createContext } = require("react");
const { default: useToogle } = require("./useToggle");

const AccordionContext = createContext();

const AccordionProvider = (props) => {
  const { value: show, handleToggle: handleToggleShow } = useToogle();
  const values = { show, handleToggleShow };
  return (
    <AccordionContext.Provider
      value={{}}
      {...props}
    ></AccordionContext.Provider>
  );
};
