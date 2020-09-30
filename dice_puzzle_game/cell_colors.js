import React, { Component } from "react";
import ObjAdd from "./Add";
import MoveCell from "./move";
import {RemovingMoreThanTwoConsecutiveColors} from "./move";

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

        this.CheckCellColor()
    }

    CheckCellColor = ()=>{
        ArrCells = document.getElementsByClassName("ColumnCell")
        let bul = true
        let cellCalculetNum = 0
        let ArrCounterColors = ObjAdd.ArrCounterColors 
        let red = ArrCounterColors.red = []
        let blue = ArrCounterColors.blue = []
        let blueviolet = ArrCounterColors.blueviolet = []
        let green = ArrCounterColors.green = []
        let yellow = ArrCounterColors.yellow = []
         
    
        for (let i = 0; i < ArrCells.length; i++) {
            for (let j = 0; j < ArrCells[i].children.length; j++) {
                let cell = document.getElementsByClassName("ColumnCell")[i].children[j].children[0].style.backgroundColor

                if (j === 0 && cell === "") {
                    if (bul === true) {
                        this.CreateColors(i,j)
                        bul = false
                    }
                }
                else if (j !== 0 && cell === "") {
                    // console.log(i, j);
                    if (bul === true) {
                        this.MovementOColorsInThePillar(i,j)
                        bul = false
                    }
                }

                if (cell !== "") {
                    if (cell === "red") {
                        red.push([i,j,cell])
                    }
                    if (cell === "blue") {
                        blue.push([i,j,cell])
                    }
                    if (cell === "blueviolet") {
                        blueviolet.push([i,j,cell])
                    }
                    if (cell === "rgb(71, 255, 47)") {
                        green.push([i,j,cell])
                    }
                    if (cell === "yellow") {
                        yellow.push([i,j,cell])
                    }

                    cellCalculetNum++
                    if (cellCalculetNum === 109 && bul === true) {
                        // console.log(cellCalculetNum);
                        RemovingMoreThanTwoConsecutiveColors()
                    }
                }
            }
        }
    }

    CreateColors = (i,j)=>{
        ArrCells = document.getElementsByClassName("ColumnCell")

        let RandomNumber = Math.round(Math.random() * (ObjAdd.ArrCellColors.length - 1))
        ArrCells[i].children[j].children[0].style.backgroundColor = ObjAdd.ArrCellColors[RandomNumber]
        
        this.CheckCellColor()
    }

    MovementOColorsInThePillar = (i,j)=>{
        ArrCells[i].children[j].children[0].style.backgroundColor  = ArrCells[i].children[j - 1].children[0].style.backgroundColor;
        ArrCells[i].children[j - 1].children[0].style.backgroundColor = ""

        this.CheckCellColor()
    }

    render(){
        return(
            <div>
                <MoveCell CellColorsProps={this}/>
            </div>
        )
    }
}


export default CellColors;