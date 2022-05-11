import React from "react";
import ZingTouch from "zingtouch";

export const Menu = (props) => {
  React.useEffect(() => {
    document.querySelector(".menu-list").firstChild.classList.add("active");
    let [currentAngle, prevAngle] = [0, 0];
    let nextActive, currActiveElement, moveNext;

    currActiveElement = document.querySelector(".active");
    const target = document.getElementById("rotatable");
    const region = new ZingTouch.Region(target);

    region.bind(target, "rotate", function (e) {
      // currActiveElement = document.querySelector(".active");
      const distFromLast = e.detail.distanceFromLast;
      currentAngle += distFromLast;
      target.style.transform = "rotate(" + currentAngle + "deg)";
      moveNext = distFromLast > 0;

      let angleChange = currentAngle - prevAngle;

      if (moveNext && angleChange > 15) {
        prevAngle = currentAngle;
        nextActive = currActiveElement.nextElementSibling;
        if (!nextActive) {
          nextActive = currActiveElement.parentElement.firstChild;
        }
        console.log(nextActive);
        currActiveElement.classList.remove("active");
        nextActive.classList.add("active");
        currActiveElement = nextActive;
      }

      if (!moveNext && angleChange < -15) {
        prevAngle = currentAngle;
        nextActive = currActiveElement.previousElementSibling;

        if (!nextActive) {
          nextActive = currActiveElement.parentElement.lastChild;
        }

        currActiveElement.classList.remove("active");
        nextActive.classList.add("active");
        currActiveElement = nextActive;
      }
    });
  }, []);

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
