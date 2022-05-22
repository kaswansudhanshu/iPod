import React from "react";
import { rotater } from "./rotater";

export const Menu = (props) => {
  let altText = document.querySelector(".active");

  const { currMenu } = props;

  // Check if the Menu is visible or not
  React.useEffect(() => {
    // if menu is home screen do nothing
    if (currMenu === 0) {
    } else if (currMenu === "x") {
      //If menu selected is dummy menu , Render the name only screen
      document.querySelector(".alt_screen").style.backgroundColor = "white";
    } else rotater(); //if menu is visible get the wheel to function

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
    <div className="Menu" style={{ background: props.deviceTheme }}>
      {/* Menu Selected */}
      <h4 className="menu-title">{title}</h4>

      {/* iterate over selected menu options and render them */}
      <ul className="menu-list">
        {options.map((option, i) => {
          return <li key={i}>{option}</li>;
        })}
      </ul>
    </div>
  );
};
