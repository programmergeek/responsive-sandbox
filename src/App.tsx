import React from "react";
import "./App.css";
import { Button } from "./Components";
import { SettingsVoice } from "@styled-icons/material-sharp/SettingsVoice";

function App() {
  return (
    <div className="App dark h-full w-full">
      <div className="dark:bg-darkModeDark w-full h-full">
        <Button
          onClick={() => console.log("click")}
          type="secondary"
          iconStart={<SettingsVoice />}
        >
          This is Sparta
        </Button>
      </div>
    </div>
  );
}

export default App;
