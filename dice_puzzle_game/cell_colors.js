import React, { Component } from "react";
import ObjAdd from "./Add";

let PlaygroundProps

class CellColors extends Component{
    constructor(props){
        super(props);
        PlaygroundProps = this.props.PlaygroundProps
    }

    CreateColors = ()=>{
        const min = async ()=>{
            await PlaygroundProps
            
            const ArrCells = document.getElementsByClassName("ButtCells")

            for (let i = 0; i < ArrCells.length; i += 11) {
                let RandomNumber = Math.round(Math.random() * (ObjAdd.ArrCellColors.length - 1))
                ArrCells[i].style.backgroundColor = ObjAdd.ArrCellColors[RandomNumber]
            }
        }
        min()
    }

    render(){
        return(
            <div>
                {this.CreateColors()}
            </div>
        )
    }
}

export default CellColors;