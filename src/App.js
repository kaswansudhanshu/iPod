import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainMenu: [
        { title: "Menu", options: ["Music", "Games", "Setting", "More.."] },
      ],
      musicMenu: [
        {
          title: "Music",
          options: ["Songs", "Artists", "Favourites", "Playlist"],
        },
      ],
      songMenu: [
        {
          title: "Songs",
          options: ["Song1", "Song2", "Song3", "Song4"],
        },
      ],
      gamesMenu: [
        {
          title: "Games",
          options: ["Snake", "Bounce", "Mario", "SpaceV"],
        },
      ],
      settingMenu: [
        {
          title: "Settings",
          options: ["Themes", "Wallpapers", "Equalizer", "Connections"],
        },
      ],
      themeMenu: [
        { title: "Themes", options: ["Theme1", "Theme2", "Theme3", "Theme4"] },
      ],
      wallpaperMenu: [
        {
          title: "Wallpapers",
          options: ["Wallpaper1", "Wallpaper2", "Wallpaper3", "Wallpaper4"],
        },
      ],
      currMenu: 1,
      menuIndexes: [
        {},
        { Music: 0, Games: 1, Settings: 2, "More..": 3 },
        { Songs: 0, Artist: 1, Favourites: 2, Playlists: 3 },
        { Song1: 0, Song2: 1, Song3: 2, Song4: 3 },
        { Snake: 0, Bounce: 1, Mario: 2, SpaceV: 3 },
        { Themes: 0, Wallpapers: 1, Equalizer: 2, Connections: 3 },
        { Theme1: 0, Theme2: 1, Theme3: 2, Theme4: 3 },
        { Wallpaper1: 0, Wallpaper2: 1, Wallpaper3: 2, Wallpaper4: 3 },
      ],
    };
  }
  render() {
    const {
      mainMenu,
      musicMenu,
      songMenu,
      gamesMenu,
      settingMenu,
      themeMenu,
      wallpaperMenu,
      currMenu,
    } = this.state;
    return (
      <div className="App">
        {currMenu === 1 && <Screen menuOption={mainMenu} />}
        {/* <Screen /> */}
        <Buttons />
      </div>
    );
  }
}

export default App;
