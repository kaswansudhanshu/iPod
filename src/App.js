import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";
import pasoori from "./songs/pasoori.mp3";
import i_love_u from "./songs/i_love_you.mp3";
import as_it_was from "./songs/as_it_was.mp3";
import first_class from "./songs/first_class.mp3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Menu and their sub-menus
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
          options: ["Pasoori", "As it Was", "I Love U", "First Class"],
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

      // Homescreen wallpaper
      homeScreenWall:
        "https://images.unsplash.com/photo-1589846666775-479db3829d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",

      menuIndexes: {
        Music: 2,
        Games: 3,
        Settings: 4,
        Songs: 5,
        Themes: 6,
        Wallpapers: 7,
        MusicPlayer: 8,
      },

      // Themes and wallpapers
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
            "https://neemopani.com/wp-content/uploads/2022/04/Pasoori-768x432.jpg",
          artist: "Coke Studio",
        },
        {
          title: "As it Was",
          songUrl: as_it_was,
          songImg:
            "https://cdn-0.justrandomthings.com/wp-content/uploads/2019/12/Capture-32.jpg?ezimgfmt=rs%3Adevice%2Frscb1-1",
          artist: "Harry Styles",
        },
        {
          title: "I Love You",
          songUrl: i_love_u,
          songImg:
            "https://ia800903.us.archive.org/18/items/mbid-ea5889f0-dc28-4e99-965b-0069e5c1bbed/mbid-ea5889f0-dc28-4e99-965b-0069e5c1bbed-22213367194_thumb500.jpg",
          artist: "The Chainsmokers",
        },
        {
          title: "First Class",
          songUrl: first_class,
          songImg:
            "https://media.pitchfork.com/photos/5929c42069fc7814a47cd7e9/1:1/w_320,c_limit/13a36918.jpg",
          artist: "Jack Harlow",
        },
      ],

      currMenu: 0, // current menu active - homescreen
      deviceTheme: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)", // default theme
      playerVisible: false, //hide music player
      isPlaying: false, //pauses the song
      songIndex: 0, //current song
    };
  }

  //Show main menu and Home Screen
  handleShowMenu = () => {
    if (this.state.currMenu === 1) {
      this.setState({ currMenu: 0 });
    } else {
      this.setState({ currMenu: 1 });
    }
    // hide the music player if visible
    this.setState({
      playerVisible: false,
    });
  };

  //Handle center button click for menu change
  handleMenuTransversal = () => {
    let currMenu = this.state.currMenu;
    if (currMenu === "x" || currMenu === 0) return;

    //if song menu is active open music player
    if (currMenu === 5) {
      this.handleSongPlayer();
      return;
    }

    //if theme menu is active change theme
    if (currMenu === 6) {
      this.handleThemeChange();
      return;
    }

    // if wallpaper menu is active change menu
    if (currMenu === 7) {
      this.handleWallpaperChange();
      return;
    }

    // if music player is on screen do nothing
    if (currMenu === 8) {
      return;
    }

    // Else render the sub menus
    const selectedMenu = document.querySelector(".active");

    // get the index of menu clicked on
    currMenu = this.state.menuIndexes[selectedMenu.textContent];

    if (currMenu) {
      this.setState({ currMenu });

      // if dummy menu option is selected
    } else this.setState({ currMenu: "x" });
  };

  // if song is selected , loads it to the player and plays
  handleSongPlayer = () => {
    const songSelected = document.querySelector(".active").textContent;
    const [songMenu] = this.state.songMenu;
    const songIndex = songMenu.options.indexOf(songSelected);

    // open the musicplayer
    // play the song and update the index
    this.setState({
      currMenu: 8,
      isPlaying: true,
      songIndex,
      playerVisible: true,
    });

    return;
  };

  //Play next song if current song ended
  songEnded = () => {
    let { songIndex, songList } = this.state;

    // if last song in list stop the music player
    if (songIndex === songList.length - 1) {
      this.setState({
        isPlaying: false,
      });
    } else {
      songIndex += 1;
      this.setState({
        songIndex,
      });
    }
  };

  //Change Homescreen wallpaper
  handleWallpaperChange = () => {
    const wallpaperSelected = document.querySelector(".active").textContent;
    const wallpaperUrl = this.state.subMenuData[wallpaperSelected];
    this.setState({
      homeScreenWall: wallpaperUrl,
    });
  };

  //Change Device theme
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
          songEnded={this.songEnded}
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
