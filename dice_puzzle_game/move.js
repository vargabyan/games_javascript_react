import React, { Component } from "react";
import ObjAdd from "./Add";

let CellColorsProps
// let ArrCells = document.getElementsByClassName("ColumnCell")

const SwapTheContentsOfTwoCells = ()=>{
    if (ObjAdd.ArrOnClick.length === 2) {
        document.getElementsByClassName("ColumnCell")[ObjAdd.ArrOnClick[0][2]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[1][0]
        document.getElementsByClassName("ColumnCell")[ObjAdd.ArrOnClick[1][2]].children[ObjAdd.ArrOnClick[1][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[0][0]

        ObjAdd.ArrOnClick = []
        CellColorsProps.CheckCellColor()
    }
}

const RemovingMoreThanTwoConsecutiveColors = ()=>{

    let ManageAsyncRequests = async ()=>{  
        await CellColorsProps

        let ArrCounterColors = ObjAdd.ArrCounterColors
        
        for (const key in ArrCounterColors) {

            for (let i = 0; i < ArrCounterColors[key].length; i++) {

                let Arr = ArrCounterColors[key]

                for (let j = 0; j < ArrCounterColors[key].length; j++) {

                    for (let k = 0; k < ArrCounterColors[key].length; k++) {
                        
                        if (Arr[i] !== Arr[j] && Arr[j] !== Arr[k] && Arr[i][1] === Arr[j][1] && Arr[j][1] === Arr[k][1]) {

                            if ((Arr[j][0] - Arr[i][0]) === 1 && (Arr[k][0] - Arr[j][0]) === 1) {

                                document.getElementsByClassName("ColumnCell")[Arr[i][0]].children[Arr[i][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[j][0]].children[Arr[j][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[k][0]].children[Arr[k][1]].children[0].style.backgroundColor = ""

                                CellColorsProps.CheckCellColor()
                            }
                            
                        }

                        if (Arr[i] !== Arr[j] && Arr[j] !== Arr[k] && Arr[i][0] === Arr[j][0] && Arr[j][0] === Arr[k][0]) {

                            if ((Arr[j][1] - Arr[i][1]) === 1 && (Arr[k][1] - Arr[j][1]) === 1) {

                                // console.log(Arr[i],Arr[j],Arr[k]);

                                document.getElementsByClassName("ColumnCell")[Arr[i][0]].children[Arr[i][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[j][0]].children[Arr[j][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[k][0]].children[Arr[k][1]].children[0].style.backgroundColor = ""

                                CellColorsProps.CheckCellColor()
                            }
                        }
                    }

                }

            }
        }
    }
    ManageAsyncRequests()
}

class MoveCell extends Component{
    constructor(props){
        super(props)
        CellColorsProps = this.props.CellColorsProps
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export {RemovingMoreThanTwoConsecutiveColors}
export {SwapTheContentsOfTwoCells}
export default MoveCell