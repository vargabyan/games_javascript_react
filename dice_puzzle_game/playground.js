import React, { Component } from "react";
import ObjAdd from "./Add";
import CellColors from "./cell_colors";

class Playground extends Component{
    CreateCells = (cellsIndex,ColumnIndex)=>{
        return(
            <div>
                <button 
                style={ObjAdd.CellsButton} 
                className={"ButtCells"} 
                id={"ButtId"}
                onClick={()=>{console.log(document.getElementsByClassName("ColumnCell")[ColumnIndex].children[cellsIndex].children[0].style.backgroundColor = "")}}
                >
                    {cellsIndex}
                </button>
            </div>
        )
    }

    ColumnForCell = (ColumnIndex)=>{
        return(
            <div className={"ColumnCell"} style={ObjAdd.StyleCellsRow}>
            {ColumnIndex}
            {this.CreateCells(0,ColumnIndex)}
            {this.CreateCells(1,ColumnIndex)}
            {this.CreateCells(2,ColumnIndex)}
            {this.CreateCells(3,ColumnIndex)}
            {this.CreateCells(4,ColumnIndex)}
            {this.CreateCells(5,ColumnIndex)}
            {this.CreateCells(6,ColumnIndex)}
            {this.CreateCells(7,ColumnIndex)}
            {this.CreateCells(8,ColumnIndex)}
            {this.CreateCells(9,ColumnIndex)}
            {this.CreateCells(10,ColumnIndex)}
        </div>
        )
    }

    CellsBorder = ()=>{
        return(
            <div>
                {this.ColumnForCell(0)}
                {this.ColumnForCell(1)}
                {this.ColumnForCell(2)}
                {this.ColumnForCell(3)}
                {this.ColumnForCell(4)}
                {this.ColumnForCell(5)}
                {this.ColumnForCell(6)}
                {this.ColumnForCell(7)}
                {this.ColumnForCell(8)}
                {this.ColumnForCell(9)}
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.CellsBorder()}
                <CellColors PlaygroundProps={this}/>
            </div>
        )
    }
}

export default Playground;