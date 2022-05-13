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
      homeScreenWall:
        "https://images.unsplash.com/photo-1589846666775-479db3829d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      deviceTheme: "#fff",
      menuIndexes: {
        Music: 2,
        Games: 3,
        Settings: 4,
        Songs: 5,
        Themes: 6,
        Wallpapers: 7,
      },
      subMenuImgs: {
        Wallpaper1:
          "https://images.unsplash.com/photo-1534488821539-74be34b3e521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper2:
          "https://images.unsplash.com/photo-1550945771-515f118cef86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper3:
          "https://images.unsplash.com/photo-1651173862055-19ac99fe6b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper4:
          "https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Theme1: "#7D647B",
        Theme2: "#A98889",
        Theme3: "#8384DF",
        Theme4: "#2ECFCA",
        Games:
          "https://images.unsplash.com/photo-1642056446459-1f10774273f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    };
  }
  handleShowMenu = () => {
    if (this.state.currMenu === 1) {
      this.setState({ currMenu: 0 });
    } else {
      this.setState({ currMenu: 1 });
    }
  };
  handleMenuTransversal = () => {
    let currMenu = this.state.currMenu;
    if (currMenu === "x" || currMenu === 0) return;
    if (currMenu === 7) {
      this.handleWallpaperChange();
      return;
    }
    const selectedMenu = document.querySelector(".active");
    currMenu = this.state.menuIndexes[selectedMenu.textContent];

    if (currMenu) {
      this.setState({ currMenu });
    } else this.setState({ currMenu: "x" });
  };

  handleWallpaperChange = () => {
    const wallpaperSelected = document.querySelector(".active").textContent;
    const wallpaperUrl = this.state.subMenuImgs[wallpaperSelected];
    this.setState({
      homeScreenWall: wallpaperUrl,
    });
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
      homeScreenWall,
      deviceTheme,
    } = this.state;
    return (
      <div className="App">
        <Screen
          currMenu={currMenu}
          homeScreenWall={homeScreenWall}
          deviceTheme={deviceTheme}
          mainMenu={mainMenu}
          musicMenu={musicMenu}
          gamesMenu={gamesMenu}
          settingMenu={settingMenu}
          songMenu={songMenu}
          themeMenu={themeMenu}
          wallpaperMenu={wallpaperMenu}
        />

        <Buttons
          handleMenu={this.handleMenuTransversal}
          showMenu={this.handleShowMenu}
        />
      </div>
    );
  }
}

export default App;
