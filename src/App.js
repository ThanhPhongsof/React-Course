import React from "react";
import SignUpForm from "./components/form/SignUpForm";
// import Form from "./components/form/Form";
import GlobalStyles from "./GlobalStyles";
// import MovieSeachApp from "./components/movies/MovieSeachApp";

const App = () => {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      {/* <Form></Form> */}
      {/* <MovieSeachApp></MovieSeachApp> */}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default App;
