import React, { Component } from "react";
import "./index.css";
import Add from "./add";
import CellLogic from "./cell_logic";
import {CallFunction} from "./move";


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            stateSection: document.getElementsByClassName("section"),
            counter: Add.counter,
            historyCounter: Add.history_counter,
            game_over: null,
        }
    }

    NewGame = () => {
        this.setState((state)=>({counter: state.counter}))
        this.setState((state) => ({
            game_over: (state.game_over = null),
          }));

        for (let i = 0; i < Add.arr_cells.length; i++) {
            Add.arr_cells[i] = []
        }
        Add.counter = 0
        
        CallFunction()
    }

    GameHistoryCalculation = () => {
        if (Add.counter > Add.history_counter) {
            Add.history_counter = Add.counter
        }
    }

    BackgroundColorCells = () => {
        setTimeout(()=>{
            for (let i = 0; i < Add.arr_cells.length; i++) {
                let elementDom = document.getElementById("cells_" + i)

                elementDom.style.backgroundColor = "white"
                
                switch (elementDom.innerText) {
                    case "4":
                        elementDom.style.backgroundColor = "rgba(114, 134, 134, 0.274)"
                        break;
                        case "8":
                            elementDom.style.backgroundColor = "rgba(255, 132, 75, 0.767)"
                            break;
                            case "16":
                                elementDom.style.backgroundColor = "rgba(253, 104, 34, 0.849)"
                                break;
                                case "32":
                                    elementDom.style.backgroundColor = "rgba(253, 71, 39, 0.767)"
                                    break;
                                    case "64":
                                        elementDom.style.backgroundColor = "rgba(252, 39, 39, 0.815)"
                                        break;
                                        case "128":
                                            elementDom.style.backgroundColor = "rgba(249, 252, 86, 0.842)"
                                            break;
                                            case "256":
                                                elementDom.style.backgroundColor = "rgb(252, 241, 86)"
                                                break;
                    default:
                        break;
                }
            }
        },0)
    }



    render(){
        return(
            <div className={"container-fluid game"}>
                <div className="row head_block">
                    <div className={"col-6 div_h1-button"}>
                        <h1>2048</h1>
                        <button onClick={this.NewGame}><h4>new game</h4></button>
                    </div>
                    <div className={"col-6 div_h4-h2"}>
                        <h4>history{" "}{this.state.historyCounter}</h4>
                        <h2>{this.state.counter}</h2>
                    </div>
                </div>

                <div className="row mt-3 block_grid...">
                    <div className={"col-12 p-0"}>
                        <CellLogic 
                            AppProps={this}
                            className="game_section"
                        />
                        {this.state.game_over}
                    </div>
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default <App/>