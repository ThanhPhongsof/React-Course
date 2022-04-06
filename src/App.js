import React from "react";
import SignUpFormV2 from "./components/form/SignUpFormV2";
// import SignUpForm from "./components/form/SignUpForm";
// import Form from "./components/form/Form";
import GlobalStyles from "./GlobalStyles";
// import MovieSeachApp from "./components/movies/MovieSeachApp";

const App = () => {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      {/* <Form></Form> */}
      {/* <MovieSeachApp></MovieSeachApp> */}
      <SignUpFormV2></SignUpFormV2>
    </div>
  );
};

export default App;
