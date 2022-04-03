// import "./App.css";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import GlobalStyles from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewWithReducer from "./components/news/HackerNewsWithReducer";

// import Blogs from "./components/Blogs";
import React from "react";
// import HackerNewWithHook from "./components/news/HackerNewWithHook";

// import InputFocus from "./components/InputFocus";
import DropDown from "./components/DropDown";
import SideBarMenu from "./components/SideBarMenu";
import useClickOutSide from "./hooks/useClickOutSide";
// import TextAreaAutoResize from "./components/TextAreaAutoResize";

const theme = {
  colors: { blue: "#2979ff" },
};
// import Button from "./components/button/Button";
// import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  // const [show, setShow] = React.useState(false);
  const { show, nodeRef, handleShow } = useClickOutSide("span");
  return (
    <div>
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList>
        <CardTailwind primary={true}></CardTailwind>
        <CardTailwind ></CardTailwind>
        <CardTailwind ></CardTailwind>
        <CardTailwind ></CardTailwind>
        <CardTailwind ></CardTailwind>
        <CardTailwind ></CardTailwind>
      </CardList>       */}
      {/* <Photos></Photos> */}
      {/* <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackerNews></HackerNews>} */}
      {/* <HackerNewWithReducer></HackerNewWithReducer> */}
      {/* <HackerNewWithHook></HackerNewWithHook> */}
      {/* <InputFocus></InputFocus> */}
      {/* <TextAreaAutoResize></TextAreaAutoResize> */}
      {/* <div className="p-5">
        <DropDown></DropDown>
      </div> */}
      {/* <Blogs></Blogs> */}
      <span
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
        onClick={() => handleShow((show) => !show)}
      >
        Show Menu
      </span>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
    </div>

    // <ThemeProvider theme={theme}>
    //   <GlobalStyles></GlobalStyles>
    //     {/* <YoutubeList></YoutubeList> */}
    //     {/* <Toggle></Toggle> */}
    //     {/* <Counter></Counter> */}
    //     {/* <Game></Game> */}
    //     {/* <Button>Primary</Button>
    //     <Button className="button--secondary">Secondary</Button> */}
    //   <CardList>
    //     <Card secondary={true}></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //   </CardList>
    // </ThemeProvider>
  );
}

export default App;
