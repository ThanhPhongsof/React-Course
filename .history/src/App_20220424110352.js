import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
// import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

const App = () => {
  const [show, setShow] = useState();
  return (
    <div>
      {/* <Title>{() => <h1>hello form render props</h1>}</Title> */}
      {/* <FetchingData></FetchingData> */}
      {/* <HandleValue></HandleValue> */}
      <Accordion></Accordion>
    </div>
  );
};

export default App;
