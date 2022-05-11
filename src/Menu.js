import React from "react";
import ZingTouch from "zingtouch";

export const Menu = () => {
  React.useEffect(() => {
    let [currentAngle, prevAngle] = [0, 0];
    let nextActive, currActiveElement, moveNext;
    currActiveElement = document.querySelector(".active");
    const target = document.getElementById("rotatable");
    const region = new ZingTouch.Region(target);

    region.bind(target, "rotate", function (e) {
      const distFromLast = e.detail.distanceFromLast;
      currentAngle += distFromLast;
      target.style.transform = "rotate(" + currentAngle + "deg)";
      moveNext = distFromLast > 0;

      let angleChange = currentAngle - prevAngle;

      if (moveNext && angleChange > 15) {
        prevAngle = currentAngle;
        nextActive = currActiveElement.nextElementSibling;
        if (!nextActive) {
          nextActive = currActiveElement.closest(".menu-list").firstChild;
        }
        currActiveElement.classList.remove("active");
        nextActive.classList.add("active");
        currActiveElement = nextActive;
      }

      if (!moveNext && angleChange < -15) {
        prevAngle = currentAngle;
        nextActive = currActiveElement.previousElementSibling;

        if (!nextActive) {
          nextActive = currActiveElement.closest(".menu-list").lastChild;
        }

        currActiveElement.classList.remove("active");
        nextActive.classList.add("active");
        currActiveElement = nextActive;
      }
    });
  }, []);

  return (
    <div className="Menu">
      <h4 className="menu-title">iPod.js</h4>
      <ul className="menu-list">
        <li className="active">Cover Flow</li>
        <li>Music</li>
        <li>Games</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};
