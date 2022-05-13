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
  console.log(deviceTheme);
  return (
    <div
      className="screen"
      style={{
        background: `url(${props.homeScreenWall}) no-repeat center/cover`,
      }}
    >
      <Navbar />
      {currMenu === 0 && <Menu currMenu={currMenu} />}
      {currMenu === "x" && <Menu currMenu={currMenu} />}
      {currMenu === 1 && <Menu menuOptions={mainMenu} />}
      {currMenu === 2 && <Menu menuOptions={musicMenu} />}
      {currMenu === 3 && <Menu menuOptions={gamesMenu} />}
      {currMenu === 4 && <Menu menuOptions={settingMenu} />}
      {currMenu === 5 && <Menu menuOptions={songMenu} />}
      {currMenu === 6 && <Menu menuOptions={themeMenu} />}
      {currMenu === 7 && <Menu menuOptions={wallpaperMenu} />}
    </div>
  );
};

export default Screen;
