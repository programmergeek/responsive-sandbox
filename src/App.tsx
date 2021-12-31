import React from "react";
import "./App.css";
import { Carousel, IconButton } from "./Components";
import { SettingsVoice } from "@styled-icons/material-sharp/SettingsVoice";

function App() {
  return (
    <div className="App h-full w-full">
      <div className="dark:bg-darkModeDark w-full h-full">
        <Carousel>
          <img
            className="MEep"
            src="https://cdn.wallpapersafari.com/55/49/kr2veP.jpg"
            alt=""
          />
          <img src="https://wallpaperaccess.com/full/1406840.jpg" alt="" />
          <img src="https://wallpaperaccess.com/full/1406842.jpg" alt="" />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
