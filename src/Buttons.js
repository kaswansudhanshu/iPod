import React from "react";

const Buttons = () => {
  return (
    <div className="buttons">
      <div className="buttons-container">
        <button
          type="button"
          id="menu"
          style={{
            display: "block",
            fontWeight: "550",
          }}
        >
          Menu
        </button>
        <div
          className="center-btns"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button type="button" id="backward">
            <img
              src="https://cdn-icons-png.flaticon.com/512/39/39712.png"
              alt="previous"
            />
          </button>
          <button
            type="button"
            id="select"
            style={{
              margin: "5px",
              background: "#CCCDC6",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            OK
          </button>
          <button type="button" id="forward">
            <img
              src="https://cdn-icons-png.flaticon.com/512/660/660276.png"
              alt="next"
            />
          </button>
        </div>
        <button type="button" id="play-pause" style={{ display: "block" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
