import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
// import Button from "./components/button/Button";
// import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  return (
    <div>
      {/* <YoutubeList></YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
      <Button className="button--secondary">Secondary</Button> */}
      <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;
