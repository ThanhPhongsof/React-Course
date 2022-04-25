import React from "react";
import Counter from "./components/advanced-react/control-props/Counter";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Edittable from "./components/advanced-react/react-composition/Edittable";
// import HandleValue from "./components/advanced-react/render-props/HandleValue";
// import Title from "./components/advanced-react/render-props/Title";
// import FetchingData from "./components/advanced-react/hoc/FetchingData";

const App = () => {
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      {/* <Title>{() => <h1>hello form render props</h1>}</Title> */}
      {/* <FetchingData></FetchingData> */}
      {/* <HandleValue></HandleValue> */}
      {/* <Accordion header="Can I change my plan later">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus,
        veniam modi, iste atque culpa temporibus nesciunt quibusdam voluptatibus
        laboriosam id inventore voluptate. Accusantium dolore doloremque quam
        provident, odio consequatur.
      </Accordion>
      <Accordion header="Can I become a Frontend Developer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus,
        veniam modi, iste atque culpa temporibus nesciunt quibusdam voluptatibus
        laboriosam id inventore voluptate. Accusantium dolore doloremque quam
        provident, odio consequatur.
      </Accordion> */}
      {/* <Edittable></Edittable> */}
      <Counter value={5} onChange={() => {}}></Counter>
    </div>
  );
};

export default App;
