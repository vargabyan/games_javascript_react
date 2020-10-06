import React, { Component } from "react";
import ObjAdd from "./Add";

let CellColorsProps
let checkNum = []
let checkNum2 = []
let ArrCells = document.getElementsByClassName("ColumnCell")

let SwapTheContentsOfTwoCells = function(){
    if (ObjAdd.ArrOnClick.length === 2) {
        ArrCells[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[1][2]
        ArrCells[ObjAdd.ArrOnClick[1][0]].children[ObjAdd.ArrOnClick[1][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[0][2]

        checkNum2.push(ObjAdd.CountGame)
        CellColorsProps.CheckCellColor()
        
        setTimeout(()=>{
        NoSwapTheContentsOfTwoCells()
        },200)
    }
}

const NoSwapTheContentsOfTwoCells = ()=>{
    if (checkNum[checkNum.length - 1] === checkNum2[checkNum2.length - 1]) {
        ArrCells[ObjAdd.ArrOnClick[0][0]].children[ObjAdd.ArrOnClick[0][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[0][2]
        ArrCells[ObjAdd.ArrOnClick[1][0]].children[ObjAdd.ArrOnClick[1][1]].children[0].style.backgroundColor = ObjAdd.ArrOnClick[1][2]

        ObjAdd.ArrOnClick = []
    }
}

let RemovingMoreThanTwoConsecutiveColors = function(){
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
                                checkNum = []
                                checkNum2 = []
                                ObjAdd.ArrOnClick = []
                                document.getElementsByClassName("ColumnCell")[Arr[i][0]].children[Arr[i][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[j][0]].children[Arr[j][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[k][0]].children[Arr[k][1]].children[0].style.backgroundColor = ""

                                SetTaimCheckCellColor()
                                
                                if (Arr[j][0] && Arr[i][0] && Arr[k][0]) { 
                                    ObjAdd.CountGame += 3  
                                    checkNum.push(ObjAdd.CountGame)
                                } else if (Arr[j][0] || Arr[i][0] || Arr[k][0]) {
                                     ObjAdd.CountGame += 1 
                                     checkNum.push(ObjAdd.CountGame)
                                }
                                this.CounterGame()
                            }
                        } 

                        if (Arr[i] !== Arr[j] && Arr[j] !== Arr[k] && Arr[i][0] === Arr[j][0] && Arr[j][0] === Arr[k][0]) {

                            if ((Arr[j][1] - Arr[i][1]) === 1 && (Arr[k][1] - Arr[j][1]) === 1) {
                                checkNum = []
                                checkNum2 = []
                                ObjAdd.ArrOnClick = []
                                document.getElementsByClassName("ColumnCell")[Arr[i][0]].children[Arr[i][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[j][0]].children[Arr[j][1]].children[0].style.backgroundColor = ""

                                document.getElementsByClassName("ColumnCell")[Arr[k][0]].children[Arr[k][1]].children[0].style.backgroundColor = ""

                                SetTaimCheckCellColor()

                                if (Arr[j][1] && Arr[i][1] && Arr[k][1]) {
                                     ObjAdd.CountGame += 3 
                                     checkNum.push(ObjAdd.CountGame)
                                } else if (Arr[j][1] || Arr[i][1] || Arr[k][1]){
                                     ObjAdd.CountGame += 1
                                     checkNum.push(ObjAdd.CountGame)
                                }
                                this.CounterGame()
                            }
                        }
                    }

                }

            }
        }
    }
    ManageAsyncRequests()
}

const SetTaimCheckCellColor = ()=>{
    setTimeout(()=>{CellColorsProps.CheckCellColor()}, 200)
}

class MoveCell extends Component{
    constructor(props){
        super(props)
        CellColorsProps = this.props.CellColorsProps
        this.state = {
            count: 0
        }
        this.CounterGame = this.CounterGame.bind(this)
        SwapTheContentsOfTwoCells = SwapTheContentsOfTwoCells.bind(this)
        RemovingMoreThanTwoConsecutiveColors = RemovingMoreThanTwoConsecutiveColors.bind(this)

    }

    CounterGame = ()=>{
        this.setState((state)=>({count: state.count = ObjAdd.CountGame}))
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export {RemovingMoreThanTwoConsecutiveColors}
export {SwapTheContentsOfTwoCells}
export default MoveCell