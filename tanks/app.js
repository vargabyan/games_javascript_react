import React, { useState } from "react";
import Tank from "./MyTank";
import EnemyTank from "./enemyTank"

function App() {
  const platformX = 550;
  const platformY = 550;

  return (
    <>
      <h1 style={{width: 550, margin: "0 auto"}}>tansks</h1>
      <div
        style={{
          width: platformX,
          height: platformY,
          border: "solid 1px black",
          margin: "0 auto",
        }}
      >
        <Tank platformX={platformX} platformY={platformY} />
        <EnemyTank platformX={platformX} platformY={platformY} />
      </div>
    </>
  );
}

// // ReactDOM.render(<App /> , document.getElementById("root"))
export default App;
