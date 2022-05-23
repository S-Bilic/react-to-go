import React from "react";
import "./App.scss";
import { Title } from "./components/text";
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <Title tag={"h1"} text={"Hello welcome to react-to-go"} />
      <Card color={"dark"}>
        <Title tag={"h1"} text={"This is a card"} color={"light"} />
      </Card>
    </div>
  );
}

export default App;
