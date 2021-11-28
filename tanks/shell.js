import React, { useState, useEffect } from "react";
import imgShell from "./image/shell.png";
import Explosion from "./explosion";

function Shell({
  firestate,
  rotateTankstate,
  moveTankXstate,
  moveTankYstate,
  setKeyFirestate,
  platformX,
  platformY,
}) {
  const [ShellOrBangstate, setShellOrBangstate] = useState(null);

  function Fire() {
    let i = 0;
    let shellSpedd = setInterval(() => {
      i += 5;

      setShellOrBangstate(
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            transform: rotateTankstate,
            marginLeft:
              rotateTankstate === "rotate(270deg)"
                ? moveTankXstate + i
                : rotateTankstate === "rotate(90deg)"
                ? moveTankXstate - i
                : moveTankXstate,
            marginTop:
              rotateTankstate === "rotate(180deg)"
                ? moveTankYstate - i
                : rotateTankstate === "rotate(0deg)"
                ? moveTankYstate + i
                : moveTankYstate,
          }}
        >
          {i < 500 ? (
            <img
              className="shellImg"
              alt=""
              src={imgShell}
              style={{
                height: "10px",
                width: "8px",

                position: "relative",
                marginTop:
                  rotateTankstate === "rotate(270deg)"
                    ? 59
                    : rotateTankstate === "rotate(0deg)"
                    ? 38
                    : null,
                marginBottom:
                  rotateTankstate === "rotate(270deg)"
                    ? -21
                    : rotateTankstate === "rotate(180deg)"
                    ? -7
                    : null,
                marginLeft:
                  rotateTankstate === "rotate(90deg)"
                    ? 17
                    : rotateTankstate === "rotate(0deg)"
                    ? 22
                    : null,
                marginRight:
                  rotateTankstate === "rotate(90deg)"
                    ? -9
                    : rotateTankstate === "rotate(180deg)"
                    ? 21
                    : null,
              }}
            />
          ) : (
            <Explosion setShellOrBangstate={setShellOrBangstate} />
          )}
        </div>
      );

      if (i === 500) {
        i = 0;
        clearInterval(shellSpedd);
        setKeyFirestate(true);
        // setShellOrBangstate()
      }
    }, 10);
  }

  useEffect(() => {
    if (firestate) {
      Fire();
    }
  }, [firestate]);

  return ShellOrBangstate;
}

export default Shell;
