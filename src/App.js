import React from "react";
import "./App.scss";
import { Title } from "./components/text";
import Card from "./components/card/card";
import { Icon, Divider } from "./components/ui";

function App() {
  return (
    <div className="App">
      <Title tag={"h1"} text={"Hello welcome to react-to-go"} />
      <Icon name="person" fill={"black"} stroke={"red"} strokeWidth={10} />
      <Divider height={30} width={30} color={"assertive"} />
      <Card color={"dark"}>
        <Title tag={"h1"} text={"This is a card"} color={"light"} />
      </Card>
    </div>
  );
}

export default App;
