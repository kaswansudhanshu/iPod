import React from "react";
import { Menu, Navbar, MusicPlayer } from "./index";

const Screen = (props) => {
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
    songEnded,
  } = props;
  return (
    <div
      className="screen"
      style={{
        background: `url(${homeScreenWall}) no-repeat center/cover`,
      }}
    >
      {/* Nav bar for notifications */}
      <Navbar deviceTheme={deviceTheme} />

      {/* Menu and their corresponding index and subMenu lists */}
      {currMenu === 0 && <Menu currMenu={currMenu} deviceTheme={deviceTheme} />}
      {currMenu === "x" && (
        <Menu currMenu={currMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 1 && (
        <Menu menuOptions={mainMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 2 && (
        <Menu menuOptions={musicMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 3 && (
        <Menu menuOptions={gamesMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 4 && (
        <Menu menuOptions={settingMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 5 && (
        <Menu menuOptions={songMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 6 && (
        <Menu menuOptions={themeMenu} deviceTheme={deviceTheme} />
      )}
      {currMenu === 7 && (
        <Menu menuOptions={wallpaperMenu} deviceTheme={deviceTheme} />
      )}

      {/* music player renders along with the screen for better functionality */}
      <MusicPlayer
        songList={songList}
        isPlaying={isPlaying}
        songIndex={songIndex}
        playerVisible={playerVisible}
        songEnded={songEnded}
      />
    </div>
  );
};

export default Screen;
