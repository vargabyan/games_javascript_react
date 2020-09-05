import React, { Component } from "react";
import Add from "./add";
import CreateGameBoard from "./board";
import Defeat from "./defeat";

let AppProps;
let CellLogicProps;

let CallFunction = function () {
  this.OnkeydownGame();

  CreateNumber();
  CreateNumber();
  this.UpgrideState();
};

let CreateNumber = function () {
  let num = Math.round(Math.random() * 15);

  if (Add.arr_cells[num].length === 0) {
    Add.arr_cells[num] = [2];
  } else {
    CreateNumber();
  }
  checkGameOver();
};

let CheckSectionCells = (A, B, C) => {
  let ArrCells = Add.arr_cells;

  if (
    ArrCells[A].length !== 0 &&
    ArrCells[B].length !== 0 &&
    ArrCells[C].length !== 0 &&
    ArrCells[A][0] !== ArrCells[B][0] &&
    ArrCells[A][0] !== ArrCells[C][0]
  ) {
    return true;
  } else {
    return false;
  }
};

let checkGameOver = function () {
  let num = 0;

  for (let i = 0; i < Add.arr_cells.length; i++) {
    if (Add.arr_cells[i].length !== 0) {
      num++;

      if (num === 15) {
        this.GameOver();
        num = 0;
      }
    }
  }
};

class MoveNumber extends Component {
  constructor(props) {
    super(props);
    CallFunction = CallFunction.bind(this);
    CreateNumber = CreateNumber.bind(this);
    checkGameOver = checkGameOver.bind(this);
    AppProps = this.props.AppProps;
    CellLogicProps = this.props.CellLogicProps;
    AppProps.NewGame();
  }

  OnkeydownGame = () => {
    document.onkeydown = (event) => {
      if (event.code === "ArrowRight") {
        CellLogicProps.MoveLeft();
        this.UpgrideState();
      }
      if (event.code === "ArrowLeft") {
        CellLogicProps.MoveRight();
        this.UpgrideState();
      }
      if (event.code === "ArrowUp") {
        CellLogicProps.MoveUp();
        this.UpgrideState();
      }
      if (event.code === "ArrowDown") {
        CellLogicProps.MoveDown();
        this.UpgrideState();
      }
    };
  };

  UpgrideState = () => {
    AppProps.BackgroundColorCells();
    AppProps.GameHistoryCalculation();
    AppProps.setState((state) => ({ stateSection: state.stateSection }));
    AppProps.setState((state) => ({ counter: (state.counter = Add.counter) }));
    AppProps.setState((state) => ({
      historyCounter: (state.historyCounter = Add.history_counter),
    }));
  };

  GameOver() {
    if (
      CheckSectionCells(0, 1, 4) === true &&
      CheckSectionCells(1, 2, 5) === true &&
      CheckSectionCells(2, 3, 6) === true &&
      CheckSectionCells(3, 2, 7) === true &&
      CheckSectionCells(4, 5, 8) === true &&
      CheckSectionCells(4, 5, 8) === true &&
      CheckSectionCells(5, 6, 9) === true &&
      CheckSectionCells(6, 7, 10) === true &&
      CheckSectionCells(7, 6, 11) === true &&
      CheckSectionCells(8, 9, 12) === true &&
      CheckSectionCells(9, 10, 13) === true &&
      CheckSectionCells(10, 11, 14) === true &&
      CheckSectionCells(11, 10, 15) === true &&
      CheckSectionCells(12, 13, 8) === true &&
      CheckSectionCells(14, 15, 10) === true
    ) {
      AppProps.setState((state) => ({
        game_over: (state.game_over = <Defeat />),
      }));
    }
  }

  render() {
    return (
      <div>
        <CreateGameBoard />
      </div>
    );
  }
}
export { CallFunction, CreateNumber };
export default MoveNumber;
