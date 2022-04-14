import React, { Fragment, useState } from "react";
import Game from "./components/tictactoe/Game";
// import DropDownPortal from "./components/DropDownPortal";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpFormReactHook from "./components/form/SignUpFormReactHook";
// import Modal from "./components/modal/Modal";
import Tooltip from "./components/tooltip/Tooltip";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
// import SignUpForm from "./components/form/SignUpForm";
// import Form from "./components/form/Form";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "react-error-boundary";
// import MovieSeachApp from "./components/movies/MovieSeachApp";

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="p-5 bg-red-100">
      <pre className="text-red-600">{error.message}</pre>
      <button onclick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen((open) => !open);
  // };

  return (
    // <div>
    //   <GlobalStyles></GlobalStyles>
    //   {/* <Form></Form> */}
    //   {/* <MovieSeachApp></MovieSeachApp> */}
    //   {/* <SignUpFormV2></SignUpFormV2> */}
    //   {/* <SignUpFormFinal></SignUpFormFinal> */}
    //   {/* <SignUpFormReactHook></SignUpFormReactHook> */}
    // </div>
    <Fragment>
      {/* <Modal open={open} handleClose={handleOpen}></Modal>
      <button
        className="p-4 text-white bg-blue-500 rounded-md"
        onClick={handleOpen}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint at vitae
        sapiente, eligendi nisi temporibus quod ipsa consequatur necessitatibus
        fugiat, perferendis, quis provident ipsam id corrupti qui ducimus illum!
        Corrupti.
      </div>
      <div className="p-5 overflow-hidden">
        <DropDownPortal></DropDownPortal>
      </div> */}
      {/* <div className="p-16 mt-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {}}>
        <Game></Game>
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
