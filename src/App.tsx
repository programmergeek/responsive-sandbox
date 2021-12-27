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
            src="https://c4.wallpaperflare.com/wallpaper/99/475/670/digital-art-artwork-men-moon-fantasy-art-hd-wallpaper-preview.jpg"
            alt=""
          />
          <img
            src="https://www.boredpanda.com/blog/wp-content/uploads/2021/11/3d-art-digital-renders-pink-landscapes-mo-meid88-fb.png"
            alt=""
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/234/52/1006/3d-landscape-hd-wallpaper-preview.jpg"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
