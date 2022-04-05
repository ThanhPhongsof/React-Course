import React from "react";
// import Form from "./components/form/Form";
import GlobalStyles from "./GlobalStyles";
import MovieSeachApp from "./components/movies/MovieSeachApp";

const App = () => {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      {/* <Form></Form> */}
      <MovieSeachApp></MovieSeachApp>
    </div>
  );
};

export default App;
