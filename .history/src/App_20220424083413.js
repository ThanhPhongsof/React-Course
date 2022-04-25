import React from "react";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

const App = () => {
  return (
    <div>
      {/* <Title>{() => <h1>hello form render props</h1>}</Title> */}
      {/* <FetchingData></FetchingData> */}
      <HandleValue></HandleValue>
    </div>
  );
};

export default App;
