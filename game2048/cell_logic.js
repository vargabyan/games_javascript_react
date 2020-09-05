import React, { Component } from "react"
import Add from "./add";
import {CreateNumber} from "./move";
import MoveNumber from "./move";

let test = 1
let bul = 0 
let muvCallABCD = 0

let CheckOver = function(A,B,C,D){
    
       
        
       
            if(Add.arr_cells[A][0] !== Add.arr_cells[B][0] && Add.arr_cells[B][0] !== Add.arr_cells[C][0] && Add.arr_cells[C][0] !== Add.arr_cells[D][0]){
                muvCallABCD = muvCallABCD + 1
                console.log(muvCallABCD);
            }
        
}

let CallCheckOver = function () {
        CheckOver(0,1,2,3)
        CheckOver(4,5,6,7)
        CheckOver(8,9,10,11)
        CheckOver(12,13,14,15)
        



        CheckOver(3,2,1,0)
        CheckOver(7,6,5,4)
        CheckOver(11,10,9,8)
        CheckOver(15,14,13,12)
        
        CheckOver(15,11,7,3)
        CheckOver(14,10,6,2)
        CheckOver(13,9,5,1)
        CheckOver(12,8,4,0)
        


        CheckOver(0,4,8,12)
        CheckOver(1,5,9,13)
        CheckOver(2,6,10,14)
        CheckOver(3,7,11,15)
        

}

class CellLogic extends Component{
    constructor(props){
        super(props)
        this.MoveCells = this.MoveCells.bind(this)
        CheckOver = CheckOver.bind(arguments)
    }

    IfCallCreateNumber(){
        if (test === 1) {
            CreateNumber()
        }
    }

    AdditionsCells = (A,B,C,D) => {
        // muvCallABCD = [A,B,C,D]
    
       this.MoveCells(A,B,C,D)
    //    CheckOver(A,B,C,D)
    

        if(Add.arr_cells[A].length !== 0 && Add.arr_cells[B].length !== 0) {
            if(Add.arr_cells[A][0] === Add.arr_cells[B][0]){
                Add.arr_cells[B] = [Add.arr_cells[A][0] + Add.arr_cells[B][0]]
                Add.arr_cells[A] = []
                Add.counter += Add.arr_cells[B][0]
                this.MoveCells(A,B,C,D)
                return
            }
        } 

        if(Add.arr_cells[B].length !== 0 && Add.arr_cells[C].length !== 0) {
            if(Add.arr_cells[B][0] === Add.arr_cells[C][0]){
                Add.arr_cells[C] = [Add.arr_cells[B][0] + Add.arr_cells[C][0]]
                Add.arr_cells[B] = []
                Add.counter += Add.arr_cells[C][0]
                this.MoveCells(A,B,C,D)
                return
            }
        }  

        if(Add.arr_cells[C].length !== 0 && Add.arr_cells[D].length !== 0) {   
            if(Add.arr_cells[C][0] === Add.arr_cells[D][0]){
                Add.arr_cells[D] = [Add.arr_cells[C][0] + Add.arr_cells[D][0]]
                Add.arr_cells[C] = []
                Add.counter += Add.arr_cells[D][0]
                this.MoveCells(A,B,C,D)
                return
            }
        } 

    }

    MoveCells = (A,B,C,D) => { 
        if (Add.arr_cells[C].length !== 0) {
            if (Add.arr_cells[D].length === 0) {
                Add.arr_cells[D] = Add.arr_cells[C]
                Add.arr_cells[C] = []
                bul = true
            }
        }

        if (Add.arr_cells[B].length !== 0) {
            if (Add.arr_cells[C].length === 0 && Add.arr_cells[D].length === 0) {
                Add.arr_cells[D] = Add.arr_cells[B]
                Add.arr_cells[B] = []
                bul = true
            }
            if (Add.arr_cells[C].length === 0) {
                Add.arr_cells[C] = Add.arr_cells[B]
                Add.arr_cells[B] = []
                bul = true
            }
        }

        if (Add.arr_cells[A].length !== 0) {
            if (Add.arr_cells[B].length === 0 && Add.arr_cells[C].length === 0 && Add.arr_cells[D].length === 0) {
                Add.arr_cells[D] = Add.arr_cells[A]
                Add.arr_cells[A] = []
                bul = true
            }
            if (Add.arr_cells[B].length === 0 && Add.arr_cells[C].length === 0) {
                Add.arr_cells[C] = Add.arr_cells[A]
                Add.arr_cells[A] = []
                bul = true
            }
            if (Add.arr_cells[B].length === 0) {
                Add.arr_cells[B] = Add.arr_cells[A]
                Add.arr_cells[A] = []
                bul = true
            }
        }

        if (bul !== false){
            this.IfCallCreateNumber()
            test = 0
        }
        bul = false
    }

    MoveLeft = () => {
        this.AdditionsCells(0,1,2,3)
        this.AdditionsCells(4,5,6,7)
        this.AdditionsCells(8,9,10,11)
        this.AdditionsCells(12,13,14,15)
        test = 1
    }

    MoveRight = () => {
        this.AdditionsCells(3,2,1,0)
        this.AdditionsCells(7,6,5,4)
        this.AdditionsCells(11,10,9,8)
        this.AdditionsCells(15,14,13,12)
        test = 1
    }

    MoveUp = () => {
        this.AdditionsCells(15,11,7,3)
        this.AdditionsCells(14,10,6,2)
        this.AdditionsCells(13,9,5,1)
        this.AdditionsCells(12,8,4,0)
        test = 1
    }

    MoveDown = () => {
        this.AdditionsCells(0,4,8,12)
        this.AdditionsCells(1,5,9,13)
        this.AdditionsCells(2,6,10,14)
        this.AdditionsCells(3,7,11,15)
        test = 1
    }

    render(){
        return(
            <div>
                <MoveNumber 
                    AppProps={this.props.AppProps}
                    CellLogicProps={this}
                />
            </div>
        )
    }
}

export { CallCheckOver }
export default CellLogic