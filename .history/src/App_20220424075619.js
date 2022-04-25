import React from "react";
import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

const App = () => {
  return (
    <div>
      <Title render={() => return <h1>Phong</h1>}></Title>
      {/* <FetchingData></FetchingData> */}
    </div>
  );
};

export default App;
