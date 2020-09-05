import React, { Component } from "react";
import "./index.css";


const SquObj = {
  x_O_arr: [null],
  If_X_O: "O",
  GameSews_waiting_parameter: null,
  sews: {
    X: 0,
    O: 0,
  },
  movee_player_subtitle: "Next player: ",
  Imit_arr: [],
  game_arr: [],

  GameSews() {
    let element = this.x_O_arr[this.x_O_arr.length - 1];

    if (this.GameSews_waiting_parameter === "winer") {
      if (element === "X") {
        this.sews.X++;
      } else {
        this.sews.O++;
      }
      this.GameSews_waiting_parameter = null;
    } else {
      if (element === "O") {
        this.sews.X++;
      } else {
        this.sews.O++;
      }
    }
  },

  ReceivingXandO() {
    if (SquObj.movee_player_subtitle !== "winer ") {
      if (this.If_X_O === "X") {
        this.If_X_O = "O";
      } else {
        this.If_X_O = "X";
      }

      this.x_O_arr.push(this.If_X_O);
    }
  },

  Win() {
    const squ_Arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let square = document.getElementsByClassName("Cells");

    const SquareABC = (param) => {
      const A = square[param[0]].innerText;
      const B = square[param[1]].innerText;
      const C = square[param[2]].innerText;

      if (A !== "" || B !== "" || C !== "") {
        if (A === B && A === C && B === C) {
          this.movee_player_subtitle = "winer ";
          this.GameSews_waiting_parameter = "winer";
          this.If_X_O = A;
          square[param[0]].style = "color: red";
          square[param[1]].style = "color: red";
          square[param[2]].style = "color: red";
        }
        if (this.movee_player_subtitle !== "winer ") {
          for (let i = 0; i < square.length; i++) {
            square[i].style = "color: black";
          }
        }
      }
    };

    squ_Arr.map((index) => SquareABC(index));
  },

  Nobody(){
    let num = 0

    for (const key of document.getElementsByClassName("Cells")) {
      if (key.innerHTML !== "") {
        num = num + 1
      }
    }
    if(num === 9){
      num = 0
      return true
    }
  },

};

class Border extends Component {
  GameCells = (i) => {
    return (
      <button
        onClick={() => {
          if (SquObj.movee_player_subtitle !== "winer ") {
            this.OnCells(i);
          }
        }}
        className={"Cells"}
        id={"idCells" + i}
      />
    );
  }

  OnCells(i) {
    let square = document.getElementsByClassName("Cells")[i];
    if (square.innerText === "") {
      square.innerText = SquObj.If_X_O;
      SquObj.Win();
      this.props.AppProps.HistoryButtonChange("OnCells");
      this.props.AppProps.Imit(i);
      SquObj.game_arr.push([
        i,
        document.getElementsByClassName("Cells")[i].innerText,
      ]);
    }
    this.props.AppProps.CheckNobody()
  }

  render () {
    return (
      <div className={"stationBlock"} id={"id_stationBlock"}>
        <div className={"section"}>
          {this.GameCells(0)}
          {this.GameCells(1)}
          {this.GameCells(2)}
        </div>

        <div className={"section"}>
          {this.GameCells(3)}
          {this.GameCells(4)}
          {this.GameCells(5)}
        </div>

        <div className={"section"}>
          {this.GameCells(6)}
          {this.GameCells(7)}
          {this.GameCells(8)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    SquObj.Imit_arr[0] = this.HandleHistoryStart("start");
    this.state = {
      history: SquObj.Imit_arr,
      state_If_X_O: SquObj.If_X_O,
    };
    this.HandleHistory = this.HandleHistory.bind(this);
    this.Imit = this.Imit.bind(this);
    this.HistoryClick = this.HistoryClick.bind(this);
  }

  HandleHistoryStart() {
    SquObj.ReceivingXandO();

    let Num = SquObj.Imit_arr.length;

    return (
      <div key={"div_butt_start"}>
        {Num + 1}.{" "}
        <button
          className={"butt_start"}
          key={"butt_start"}
          onClick={() => {
            this.HistoryClick(Num);
            SquObj.GameSews();
          }}
        >
          go to gmae start
        </button>
      </div>
    );
  }

  HandleHistory(par) {
    SquObj.ReceivingXandO();

    let Num = SquObj.Imit_arr.length;

    return (
      <div key={"div_butt" + par}>
        {Num + 1}.{" "}
        <button
          className={"butt" + par}
          key={"butt" + par}
          onClick={() => {
            this.HistoryClick(Num);
            this.CheckNobody()
          }}
        >
          go to move #{Num}
        </button>
      </div>
    );
  }

  Imit(par) {
    SquObj.Imit_arr.push(this.HandleHistory(par));
    this.setState((state) => ({ history: (state.history = SquObj.Imit_arr) }));
  }

  HistoryClick(par) {
    SquObj.HistoryClick_par = par;
    SquObj.If_X_O = SquObj.x_O_arr[SquObj.HistoryClick_par + 1];
    this.setState((state) => ({
      state_If_X_O: (state.state_If_X_O = SquObj.If_X_O),
    }));

    let Num = par - 1;
    let element = document.getElementsByClassName("Cells");
    SquObj.movee_player_subtitle = "Next player: ";

    for (let i = 0; i < element.length; i++) {
      element[i].innerText = null;
    }

    for (let i = 0; i <= Num; i++) {
      document.getElementsByClassName("Cells")[
        SquObj.game_arr[i][0]
      ].innerHTML = SquObj.game_arr[i][1];
    }
    this.HistoryButtonChange("Imit");
    SquObj.Win();
  }

  HistoryButtonChange(arg) {
    let Num = SquObj.HistoryClick_par + 1;
    if (arg === "Imit") {
      SquObj.arg_Imit = "Imit";
    }

    if (SquObj.arg_Imit === "Imit" && arg === "OnCells") {
      SquObj.Imit_arr.splice(Num, SquObj.Imit_arr.length);
      this.setState((state) => ({
        history: (state.history = SquObj.Imit_arr),
      }));
      SquObj.game_arr.splice(SquObj.HistoryClick_par, SquObj.game_arr.length);

      SquObj.HistoryClick_par = null;
      SquObj.arg_Imit = null;
    }
  }

  CheckNobody = () => {
    if (SquObj.Nobody()) {
      if (SquObj.movee_player_subtitle !== "winer ") {
        SquObj.movee_player_subtitle = "nobody's "
        this.setState((state) => ({
          state_If_X_O: (state.state_If_X_O = SquObj.If_X_O = ""),
        }));
        setTimeout(()=>{
          this.HistoryClick(0)
        }, 2000)
      }
   }
  }

  render() {
    return (
      <div className="container mt-5">
        <div className={"col-auto game"}>
          <Border AppProps={this}/>
        </div>
        <div className={"col-auto go_to_move"} id={"id_go_to_move"}>
          {SquObj.movee_player_subtitle} {SquObj.If_X_O}
          <div>
            Sews X: {SquObj.sews.X} / O: {SquObj.sews.O}
          </div>
          <div className={"button_block"}>{this.state.history}</div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default <App />;
