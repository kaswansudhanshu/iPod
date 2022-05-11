import React from "react";
import ZingTouch from "zingtouch";

const Buttons = () => {
  // React.useEffect(() => {
  //   let currentAngle = 15;
  //   let target = document.getElementById("rotatable");
  //   let region = new ZingTouch.Region(target);

  //   region.bind(target, "rotate", function (e) {
  //     currentAngle += e.detail.distanceFromLast;
  //     target.style.transform = "rotate(" + currentAngle + "deg)";
  //   });
  // }, []);
  return (
    <div className="buttons">
      <div className="rotatable" id="rotatable"></div>
      <div className="buttons-container">
        <button
          type="button"
          id="menu"
          style={{
            display: "block",
            fontWeight: "550",
            top: "5%",
            left: "29%",
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
          <button
            type="button"
            id="backward"
            style={{
              top: "40%",
              left: "0",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/39/39712.png"
              alt="previous"
            />
          </button>
          <button
            type="button"
            id="select"
            style={{
              width: "40px",
              height: "40px",
              top: "30%",
              left: "29%",
              margin: "5px",
              background: "#b9b9b9",
              color: "#fff",
              borderRadius: "50%",
            }}
          ></button>
          <button
            type="button"
            id="forward"
            style={{
              top: "40%",
              right: "0",
              paddingRight: ".25rem",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/660/660276.png"
              alt="next"
            />
          </button>
        </div>
        <button
          type="button"
          id="play-pause"
          style={{
            display: "block",
            bottom: "0",
            left: "39%",
          }}
        >
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
