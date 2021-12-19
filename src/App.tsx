import React from "react";
import "./App.css";
import { Button } from "./Components";

function App() {
  return (
    <div className="App dark h-full w-full">
      <div className="dark:bg-darkModeDark w-full h-full">
        <Button onClick={() => console.log("click")} type="tertiary" disabled>
          This is Sparta
        </Button>
      </div>
    </div>
  );
}

export default App;
