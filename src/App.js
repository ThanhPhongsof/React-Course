// import "./App.css";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import GlobalStyles from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./components/card/CardTailwind";
// import Photos from "./components/photo/Photos";
import HackerNews from "./components/news/HackerNews";

const theme = {
  colors: { blue: "#2979ff" },
};
// import Button from "./components/button/Button";
// import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

function App() {
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
      <HackerNews></HackerNews>
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
