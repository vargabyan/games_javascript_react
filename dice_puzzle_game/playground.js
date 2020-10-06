import React, { Component } from "react";
import ObjAdd from "./Add";
import CellColors from "./cell_colors";
import {SwapTheContentsOfTwoCells} from "./move";

class Playground extends Component{
    CreateCells = (cell_i,colum_i)=>{
        return(
            <div style={ObjAdd.DivButton}>
                <button 
                style={ObjAdd.CellsButton} 
                className={"ButtCells"} 
                id={"ButtId"}
                onClick={()=>{this.OnClickCell(cell_i,colum_i)}}
                >
                </button>
            </div>
        )
    }

    OnClickCell = (cell_i,colum_i)=>{
        let cell = document.getElementsByClassName("ColumnCell")
        let cellColor = document.getElementsByClassName("ColumnCell")[colum_i].children[cell_i].children[0].style.backgroundColor

        if (cellColor !== "") {
            if (ObjAdd.ArrOnClick.length === 0) {
                ObjAdd.ArrOnClick.push([colum_i,cell_i,cellColor])

                cell[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.border = "solid 3px black"

            } else if (ObjAdd.ArrOnClick.length === 1) {
                
                if ((colum_i === ObjAdd.ArrOnClick[0][0] 
                 && (cell_i === (ObjAdd.ArrOnClick[0][1] + 1) || cell_i === (ObjAdd.ArrOnClick[0][1] - 1)) 
                 && cellColor !== ObjAdd.ArrOnClick[0][2]) 
                 ||
                    (cell_i === ObjAdd.ArrOnClick[0][1] 
                 && (colum_i === (ObjAdd.ArrOnClick[0][0] + 1) || colum_i === (ObjAdd.ArrOnClick[0][0] - 1)) 
                 && cellColor !== ObjAdd.ArrOnClick[0][2])) {
                    ObjAdd.ArrOnClick.push([colum_i,cell_i,cellColor])

                    cell[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.border = "none"

                    SwapTheContentsOfTwoCells()
                } else {
                    ObjAdd.ArrOnClick.push([colum_i,cell_i,cellColor])

                    if (ObjAdd.ArrOnClick[0][0] === ObjAdd.ArrOnClick[1][0] 
                        && ObjAdd.ArrOnClick[0][1] === ObjAdd.ArrOnClick[1][1] 
                        && ObjAdd.ArrOnClick[0][2] === ObjAdd.ArrOnClick[1][2]) {

                        cell[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.border = "none"

                        ObjAdd.ArrOnClick = []
                    } else {
                        cell[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.border = "none"

                        ObjAdd.ArrOnClick = []
                        ObjAdd.ArrOnClick.push([colum_i,cell_i,cellColor])

                        cell[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.border = "solid 3px black"
                    }
                }
            }
        }
    }

    ColumnForCell = (colum_i)=>{
        return(
            <div className={"ColumnCell"} style={ObjAdd.StyleCellsRow}>
                {this.CreateCells(0,colum_i)}
                {this.CreateCells(1,colum_i)}
                {this.CreateCells(2,colum_i)}
                {this.CreateCells(3,colum_i)}
                {this.CreateCells(4,colum_i)}
                {this.CreateCells(5,colum_i)}
                {this.CreateCells(6,colum_i)}
                {this.CreateCells(7,colum_i)}
                {this.CreateCells(8,colum_i)}
                {this.CreateCells(9,colum_i)}
                {this.CreateCells(10,colum_i)}
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
                <CellColors PlaygroundProps={this}/>
                {this.CellsBorder()}
            </div>
        )
    }
}

export default Playground;