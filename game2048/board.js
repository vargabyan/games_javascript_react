import React, { Component } from "react";
import Add from "./add";


class CreateGameBoard extends Component{
    CreateCells = (i) => {
        return(
            <div 
            className={"cells"}
            id={"cells_" + i}
            >
                <h1>{Add.arr_cells[i]}</h1>
            </div>
        )
    }
    
    

    Grid = () => {
        return(
            <div className={"grid"}>
                <div className={"section"}>
                    {this.CreateCells(0)}
                    {this.CreateCells(1)}
                    {this.CreateCells(2)}
                    {this.CreateCells(3)}
                </div>
                <div className={"section"}>
                    {this.CreateCells(4)}
                    {this.CreateCells(5)}
                    {this.CreateCells(6)}
                    {this.CreateCells(7)}
                </div>
                <div className={"section"}>
                    {this.CreateCells(8)}
                    {this.CreateCells(9)}
                    {this.CreateCells(10)}
                    {this.CreateCells(11)}
                </div>
                <div className={"section"}>
                    {this.CreateCells(12)}
                    {this.CreateCells(13)}
                    {this.CreateCells(14)}
                    {this.CreateCells(15)}
                </div>
            </div>
        )
    }    

    render(){
        return(
            <div>
                <this.Grid />
            </div>
        )
    }
}

export default CreateGameBoard