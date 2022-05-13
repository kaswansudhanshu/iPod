import React from "react";
import { rotater } from "./rotater";

export const Menu = (props) => {
  let altText = document.querySelector(".active");

  const { currMenu } = props;
  React.useEffect(() => {
    if (currMenu === 0) {
    } else if (currMenu === "x") {
      document.querySelector(".alt_screen").style.backgroundColor = "white";
    } else rotater();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.currMenu === 0) {
    return <div className="home_screen"></div>;
  } else if (props.currMenu === "x") {
    return (
      <div className="alt_screen">
        <h2>{altText.textContent}</h2>
      </div>
    );
  }

  const [{ title, options }] = props.menuOptions;
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
