import React from "react";
import { rotater } from "./rotater";

export const Menu = (props) => {
  let altText = document.querySelector(".active");
  React.useEffect(() => {
    if (props.currMenu === 0) {
    } else if (props.currMenu === "x") {
      document.querySelector(".Home_screen").style.backgroundColor = "white";
    } else rotater();
  }, []);

  if (props.currMenu === 0) {
    return <div className="Home_screen"></div>;
  } else if (props.currMenu === "x") {
    return (
      <div className="Home_screen">
        <h2>{altText.textContent}</h2>
      </div>
    );
  }

  const { title, options } = props.menuOptions[0];
  return (
    <div className="Menu">
      <h4 className="menu-title">{title}</h4>
      <ul className="menu-list">
        {options.map((option, i) => {
          return <li key={i}>{option}</li>;
        })}
      </ul>
    </div>
  );
};
