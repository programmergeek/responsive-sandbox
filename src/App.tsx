import React from "react";
import "./App.css";
import { Carousel, IconButton } from "./Components";
import { SettingsVoice } from "@styled-icons/material-sharp/SettingsVoice";

function App() {
  return (
    <div className="App h-full w-full">
      <div className="dark:bg-darkModeDark w-full h-full">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
