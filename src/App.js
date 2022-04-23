import React from "react";
import "./App.scss";
import { Title } from "./components/text";

function App() {
  return (
    <div className="App">
      <Title tag={"h1"} text={"Hello welcome to react-to-go"} />
    </div>
  );
}

export default App;
