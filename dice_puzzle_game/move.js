import React, { Component } from "react";

let CellColorsProps
let test = 0
let ArrCells

const CheckLackOfColor = ()=>{
    ArrCells = document.getElementsByClassName("ColumnCell")

    for (let i = 0; i < ArrCells.length; i++) {
        for (let j = 0; j < ArrCells[i].children.length; j++) {

            if (ArrCells[i].children[j].children[0].style.backgroundColor === "") {
                console.log(test++);
                CellColorsProps.MovementOColorsInThePillar()
            }
            
        }
    }
}

class MoveCell extends Component{
    constructor(props){
        super(props)
        CellColorsProps = this.props.CellColorsProps
        this.ManageAsyncRequests()
    }

    ManageAsyncRequests = async ()=>{  
        await CellColorsProps.CreateColors()

        CheckLackOfColor()
    }



    render(){
        return(
            <div>

            </div>
        )
    }
}

export {CheckLackOfColor}
export default MoveCell