import React, { useState, useEffect } from "react";
import imgMyTank from "./image/tank1.png";
import Shell from "./shell";

function Tank({ platformX, platformY }) {
  const tankWidth = 50;
  const tankHeight = 50;
  const [myTankstate, setMyTankstate] = useState(null);
  const [moveTankXstate, setMoveTankXstate] = useState(0);
  const [moveTankYstate, setMoveTankYstate] = useState(0);
  const [rotateTankstate, setRotateTankstate] = useState("rotate(180deg)");
  const [firestate, setFirestate] = useState(false);
  const [keyFirestate, setKeyFirestate] = useState(true);
  platformX = platformX - tankWidth;
  platformY = platformY - tankHeight;

  useEffect(() => {
    setMyTankstate(
      <div
        style={{
          width: tankWidth,
          height: tankHeight,
          marginLeft: moveTankXstate,
          marginTop: moveTankYstate,
          position: "absolute",
        }}
      >
        <img
          alt="imgTank"
          src={imgMyTank}
          style={{
            width: tankWidth,
            height: tankHeight,
            transform: rotateTankstate,
            position: "relative",
          }}
        />
      </div>
    );
  }, [moveTankXstate, moveTankYstate, rotateTankstate]);

  function TankFire() {
    setFirestate(true);

    setTimeout(() => {
      setFirestate(false);
    }, 0);
  }

  function Move() {
    document.onkeydown = (event) => {
      if (event.code === "Numpad0") {
        if (keyFirestate) TankFire();
        setKeyFirestate(false);
      }

      if (event.code === "ArrowRight") {
        setRotateTankstate("rotate(270deg)");

        if (rotateTankstate === "rotate(270deg)") {
          let right =
            moveTankXstate < platformX ? moveTankXstate + 10 : platformX;
          setMoveTankXstate(right);
        }
      }
      if (event.code === "ArrowLeft") {
        setRotateTankstate("rotate(90deg)");

        if (rotateTankstate === "rotate(90deg)") {
          let left =
            moveTankXstate > platformX - platformX
              ? moveTankXstate - 10
              : platformX - platformX;
          setMoveTankXstate(left);
        }
      }
      if (event.code === "ArrowUp") {
        setRotateTankstate("rotate(180deg)");

        if (rotateTankstate === "rotate(180deg)") {
          let up =
            moveTankYstate > platformY - platformY
              ? moveTankYstate - 10
              : platformY - platformY;
          setMoveTankYstate(up);
        }
      }
      if (event.code === "ArrowDown") {
        setRotateTankstate("rotate(0deg)");

        if (rotateTankstate === "rotate(0deg)") {
          let down =
            moveTankYstate < platformY ? moveTankYstate + 10 : platformY;
          setMoveTankYstate(down);
        }
      }
    };
  }

  return (
    <>
      {myTankstate}
      {Move()}
      <Shell
        platformX={platformX}
        platformY={platformY}
        firestate={firestate}
        moveTankXstate={moveTankXstate}
        moveTankYstate={moveTankYstate}
        rotateTankstate={rotateTankstate}
        setKeyFirestate={setKeyFirestate}
      />
    </>
  );
}

export default Tank;
