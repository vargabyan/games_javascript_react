import React, { useState, useEffect } from "react";
import imgEnemyTank from "./image/tank2.png";
import Shell from "./shell";

function EnemyTank({ platformX, platformY }) {
  const tankWidth = 50;
  const tankHeight = 50;
  const [enemystate, setEnemystate] = useState(null);
  const [moveTankXstate, setMoveTankXstate] = useState(0);
  const [moveTankYstate, setMoveTankYstate] = useState(0);
  const [rotateTankstate, setRotateTankstate] = useState("rotate(180deg)");
  const [firestate, setFirestate] = useState(false);
  const [keyFirestate, setKeyFirestate] = useState(true);
  platformX = platformX - tankWidth;
  platformY = platformY - tankHeight;

  useEffect(() => {
    setEnemystate(
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
          alt="imgEnemyTank"
          src={imgEnemyTank}
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

  function Move(rotate, step, fier) {

    if (fier === "Numpad0") {
      if (keyFirestate) TankFire();
      setKeyFirestate(false);
    }

    if (rotate === "ArrowRight") {
      setRotateTankstate("rotate(270deg)");

      if (rotateTankstate === "rotate(270deg)") {
        let right =
          moveTankXstate < platformX ? moveTankXstate + step : platformX;
        setMoveTankXstate(right);
      }
    }
    if (rotate === "ArrowLeft") {
      setRotateTankstate("rotate(90deg)");

      if (rotateTankstate === "rotate(90deg)") {
        let left =
          moveTankXstate > platformX - platformX
            ? moveTankXstate - step
            : platformX - platformX;
        setMoveTankXstate(left);
      }
    }
    if (rotate === "ArrowUp") {
      setRotateTankstate("rotate(180deg)");

      if (rotateTankstate === "rotate(180deg)") {
        let up =
          moveTankYstate > platformY - platformY
            ? moveTankYstate - step
            : platformY - platformY;
        setMoveTankYstate(up);
      }
    }
    if (rotate === "ArrowDown") {
      setRotateTankstate("rotate(0deg)");

      if (rotateTankstate === "rotate(0deg)") {
        let down =
          moveTankYstate < platformY ? moveTankYstate + step : platformY;
        setMoveTankYstate(down);
      }
    }
  }

  const AutoControlTanks = ()=>{
    const rotate = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
    const step = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]



    // Move(rotate, step, fier)

  }

  return (
    <>
        {enemystate}
        {AutoControlTanks()}
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
  )
}

export default EnemyTank;