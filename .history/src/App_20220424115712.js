import React from "react";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Edittable from "./components/advanced-react/react-composition/Edittable";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
// import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

const App = () => {
  return (
    <div>
      {/* <Title>{() => <h1>hello form render props</h1>}</Title> */}
      {/* <FetchingData></FetchingData> */}
      {/* <HandleValue></HandleValue> */}
      <Accordion>Accordion content</Accordion>
      <Edittable></Edittable>
    </div>
  );
};

export default App;
