import React from "react";
import "./App.scss";
import { Title } from "./components/text";
import Card from "./components/card/card";
import { Icon, Divider } from "./components/ui";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Title tag={"h2"} text={"Hello welcome to react-to-go"} />
      <Icon name="person" fill={"black"} stroke={"red"} strokeWidth={10} />
      <Divider height={30} width={30} color={"assertive"} />
      <Card color={"dark"}>
        <Title tag={"h1"} text={"This is a card"} color={"light"} />
      </Card>
      <Divider height={20} />
      <Button
        href={"/xd"}
        text={"Anchor with href as a link"}
        textColor={"positive"}
        target={"_blank"}
        link
      />
      <Divider height={20} />
      <Button
        href={"/"}
        text={"Anchor with href"}
        color={"positive"}
        textColor={"light"}
      />
      <Divider height={20} />
      <Button
        action={() => alert("hello world")}
        text={"Button with action"}
        color={"positive"}
        textColor={"light"}
      />
      <Divider height={20} />
      <Button
        text={"I am very wide"}
        color={"positive"}
        textColor={"light"}
        grow
      />
      <Divider height={20} />
      <Button
        text={"I have a shadow and radius"}
        color={"positive"}
        textColor={"light"}
        boxShadow
        borderRadius
      />
    </div>
  );
}

export default App;
