import React, { Component } from "react";
import ObjAdd from "./Add";
import MoveCell from "./move";
import {CheckLackOfColor} from "./move"

let PlaygroundProps
let ArrCells

class CellColors extends Component{
    constructor(props){
        super(props);
        PlaygroundProps = this.props.PlaygroundProps
        this.ManageAsyncRequests()
    }

    ManageAsyncRequests = async ()=>{
        await PlaygroundProps

        this.CreateColors()
    }

    CreateColors = ()=>{
        ArrCells = document.getElementsByClassName("ColumnCell")

        for (let j = 0; j < ArrCells.length; j++) {
            for (let i = 0; i < 1; i++) {
                if (ArrCells[j].children[i].children[0].style.backgroundColor === "") {
                    let RandomNumber = Math.round(Math.random() * (ObjAdd.ArrCellColors.length - 1))
                    ArrCells[j].children[i].children[0].style.backgroundColor = ObjAdd.ArrCellColors[RandomNumber]
                    this.MovementOColorsInThePillar()
                }
            }
        }
    }

    MovementOColorsInThePillar = ()=>{
        for (let j = 0; j < ArrCells.length; j++) {
            for (let i = 0; i < ArrCells[0].children.length; i++) {
                if (ArrCells[j].children[i].children[0].style.backgroundColor === "") {
                    (   ArrCells[j].children[i].children[0].style.backgroundColor 
                        = 
                        ArrCells[j].children[i - 1].children[0].style.backgroundColor   )
                        ArrCells[j].children[i - 1].children[0].style.backgroundColor = ""
                    this.CreateColors()
                    CheckLackOfColor()
                }
            }
        }
    }

    render(){
        return(
            <div>
                {this.CreateColors()}
                <MoveCell CellColorsProps={this}/>
            </div>
        )
    }
}

export default CellColors;