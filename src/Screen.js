import React from "react";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

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
  } = props;
  return (
    <div
      className="screen"
      style={{
        background: `url(${homeScreenWall}) no-repeat center/cover`,
      }}
    >
      <Navbar deviceTheme={deviceTheme} />
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
    </div>
  );
};

export default Screen;
