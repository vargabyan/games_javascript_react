import React, { Component } from "react";
import ObjAdd from "./Add";
import MoveCell from "./move";

let PlaygroundProps

class CellColors extends Component{
    constructor(props){
        super(props);
        PlaygroundProps = this.props.PlaygroundProps
    }

    CreateColors = ()=>{
        const min = async ()=>{
            await PlaygroundProps

            this.Colors()
        }
        min()
    }

    Colors = ()=>{
        const ArrCells = document.getElementsByClassName("ColumnCell")

        for (let j = 0; j < ArrCells.length; j++) {
            for (let i = 0; i < 1; i++) {
                if (ArrCells[j].children[i].children[0].style.backgroundColor === "") {
                    let RandomNumber = Math.round(Math.random() * (ObjAdd.ArrCellColors.length - 1))
                    ArrCells[j].children[i].children[0].style.backgroundColor = ObjAdd.ArrCellColors[RandomNumber]
                    this.MovementOColorsInThePillar(ArrCells)
                }
            }
        }
    }

    MovementOColorsInThePillar = (argument)=>{
        const ArrCells = argument

        for (let j = 0; j < ArrCells.length; j++) {
            for (let i = 0; i < ArrCells[0].children.length; i++) {
                if (ArrCells[j].children[i].children[0].style.backgroundColor === "") {
                    (   ArrCells[j].children[i].children[0].style.backgroundColor 
                        = 
                        ArrCells[j].children[i - 1].children[0].style.backgroundColor   )
                        ArrCells[j].children[i - 1].children[0].style.backgroundColor = ""
                    this.Colors()
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