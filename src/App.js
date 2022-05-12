import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainMenu: [{ title: "Menu", options: ["Music", "Games", "Settings"] }],
      musicMenu: [
        {
          title: "Music",
          options: ["Songs", "Artists", "Favourites", "Playlist"],
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
      songMenu: [
        {
          title: "Songs",
          options: ["Song1", "Song2", "Song3", "Song4"],
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
      currMenu: 0,
      menuIndexes: {
        Music: 2,
        Games: 3,
        Settings: 4,
        Songs: 5,
        Themes: 6,
        Wallpapers: 7,
      },
    };
  }
  handleShowMenu = () => {
    this.setState({ currMenu: 1 });
  };
  handleMenuTransversal = () => {
    let currMenu = this.state.currMenu;
    if (currMenu === "x" || currMenu === 0) return;

    const selectedMenu = document.querySelector(".active");
    currMenu = this.state.menuIndexes[selectedMenu.textContent];

    if (currMenu) {
      this.setState({ currMenu });
    } else this.setState({ currMenu: "x" });
  };

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
      menuIndexes,
    } = this.state;
    return (
      <div className="App">
        {currMenu === 0 && <Screen currMenu={this.state.currMenu} />}
        {currMenu === "x" && <Screen currMenu={this.state.currMenu} />}
        {currMenu === 1 && <Screen menuOption={mainMenu} />}
        {currMenu === 2 && <Screen menuOption={musicMenu} />}
        {currMenu === 3 && <Screen menuOption={gamesMenu} />}
        {currMenu === 4 && <Screen menuOption={settingMenu} />}
        {currMenu === 5 && <Screen menuOption={songMenu} />}
        {currMenu === 6 && <Screen menuOption={themeMenu} />}
        {currMenu === 7 && <Screen menuOption={wallpaperMenu} />}
        <Buttons
          handleMenu={this.handleMenuTransversal}
          showMenu={this.handleShowMenu}
        />
      </div>
    );
  }
}

export default App;
