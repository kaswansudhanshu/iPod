import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";
import pasoori from "./songs/pasori.mp3";

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
          options: ["Pasoori", "Song2", "Song3", "Song4"],
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
      deviceTheme: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
      menuIndexes: {
        Music: 2,
        Games: 3,
        Settings: 4,
        Songs: 5,
        Themes: 6,
        Wallpapers: 7,
        MusicPlayer: 8,
      },
      subMenuData: {
        Wallpaper1:
          "https://images.unsplash.com/photo-1534488821539-74be34b3e521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper2:
          "https://images.unsplash.com/photo-1550945771-515f118cef86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper3:
          "https://images.unsplash.com/photo-1651173862055-19ac99fe6b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Wallpaper4:
          "https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Theme1: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",
        Theme2: "linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%)",
        Theme3: "linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%)",
        Theme4: "linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)",
        Games:
          "https://images.unsplash.com/photo-1642056446459-1f10774273f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      songList: [
        {
          title: "Pasoori",
          songUrl: pasoori,
          songImg:
            "https://th.bing.com/th/id/OIP.UWSvU0veAEDSwzsEj0hUCwHaEK?pid=ImgDet&rs=1",
          artist: "Coke Studio",
        },
      ],
      playerVisible: false,
      isPlaying: false,
      songIndex: 0,
    };
  }

  handleShowMenu = () => {
    if (this.state.currMenu === 1) {
      this.setState({ currMenu: 0 });
    } else {
      this.setState({ currMenu: 1 });
    }
    this.setState({
      playerVisible: false,
    });
  };

  handleMenuTransversal = () => {
    let currMenu = this.state.currMenu;
    if (currMenu === "x" || currMenu === 0) return;

    if (currMenu === 5) {
      this.handleSongPlayer();
      return;
    }

    if (currMenu === 6) {
      this.handleThemeChange();
      return;
    }
    if (currMenu === 7) {
      this.handleWallpaperChange();
      return;
    }
    if (currMenu === 8) {
      return;
    }
    const selectedMenu = document.querySelector(".active");
    currMenu = this.state.menuIndexes[selectedMenu.textContent];

    if (currMenu) {
      this.setState({ currMenu });
    } else this.setState({ currMenu: "x" });
  };

  handleSongPlayer = () => {
    const songSelected = document.querySelector(".active").textContent;
    const [songMenu] = this.state.songMenu;
    const songIndex = songMenu.options.indexOf(songSelected);
    this.setState({
      currMenu: 8,
      isPlaying: true,
      songIndex,
      playerVisible: true,
    });

    return;
  };

  handleWallpaperChange = () => {
    const wallpaperSelected = document.querySelector(".active").textContent;
    const wallpaperUrl = this.state.subMenuData[wallpaperSelected];
    this.setState({
      homeScreenWall: wallpaperUrl,
    });
  };

  handleThemeChange = () => {
    const themeSelected = document.querySelector(".active").textContent;
    const themeHashCode = this.state.subMenuData[themeSelected];
    this.setState({
      deviceTheme: themeHashCode,
    });
  };

  playpauseTrack = () => {
    // Switch between playing and pausing
    // depending on the current state
    if (!this.state.isPlaying) this.playTrack();
    else this.pauseTrack();
  };

  playTrack = () => {
    // Play the loaded track
    this.setState({
      isPlaying: true,
    });
  };

  pauseTrack = () => {
    // Pause the loaded track
    this.setState({
      isPlaying: false,
    });
  };

  nextTrack = () => {
    let { songIndex, songList } = this.state;
    // Go back to the first track if the
    // current one is the last in the track list
    if (songIndex < songList.length - 1) songIndex += 1;
    else songIndex = 0;
    this.setState({
      songIndex,
    });
  };
  prevTrack = () => {
    let { songIndex, songList } = this.state;
    // Go back to the last track if the
    // current one is the first in the track list
    if (songIndex > 0) songIndex -= 1;
    else songIndex = songList.length - 1;

    this.setState({
      songIndex,
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
      songList,
      isPlaying,
      songIndex,
      playerVisible,
      prevTrack,
      nextTrack,
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
          songList={songList}
          isPlaying={isPlaying}
          songIndex={songIndex}
          playerVisible={playerVisible}
        />

        <Buttons
          handleMenu={this.handleMenuTransversal}
          showMenu={this.handleShowMenu}
          deviceTheme={deviceTheme}
          playpauseTrack={this.playpauseTrack}
          prevTrack={this.prevTrack}
          nextTrack={this.nextTrack}
        />
      </div>
    );
  }
}

export default App;
