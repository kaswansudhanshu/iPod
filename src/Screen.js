import React from "react";
import { Menu } from "./Menu";

const Screen = (props) => {
  return (
    <div className="screen">
      <Menu menuOptions={props.menuOption} />
    </div>
  );
};

export default Screen;
