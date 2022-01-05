import React from "react";
import "./App.css";
import { DropMenu } from "./Components";

function App() {
  return (
    <div className="App h-full w-full">
      <div className="dark:bg-darkModeDark w-full h-full"></div>
      <DropMenu menuName="This is Sparta" />
    </div>
  );
}

export default App;
