import React from "react";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
import SignUpFormReactHook from "./components/form/SignUpFormReactHook";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
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
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      <SignUpFormReactHook></SignUpFormReactHook>
    </div>
  );
};

export default App;
