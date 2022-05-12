import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <div className="rotatable" id="rotatable"></div>
      <div className="buttons-container">
        <button type="button" id="menu-btn" onClick={props.showMenu}>
          Menu
        </button>
        <div className="center-btns">
          <button type="button" id="backward">
            <img
              src="https://cdn-icons-png.flaticon.com/512/39/39712.png"
              alt="previous"
            />
          </button>
          <button type="button" id="select" onClick={props.handleMenu}></button>
          <button type="button" id="forward">
            <img
              src="https://cdn-icons-png.flaticon.com/512/660/660276.png"
              alt="next"
            />
          </button>
        </div>
        <button type="button" id="play-pause">
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="play-pause"
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
