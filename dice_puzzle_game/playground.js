import React, { Component } from "react";
import ObjAdd from "./Add";
import CellColors from "./cell_colors";

class Playground extends Component{
    CreateCells = (i)=>{
        return(
            <div>
                <button style={ObjAdd.CellsButton} className={"ButtCells"} id={"ButtId_" + i}>
                    {i}
                </button>
            </div>
        )
    }

    CellsBorder = ()=>{
        return(
            <div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(0)}
                    {this.CreateCells(1)}
                    {this.CreateCells(2)}
                    {this.CreateCells(3)}
                    {this.CreateCells(4)}
                    {this.CreateCells(5)}
                    {this.CreateCells(6)}
                    {this.CreateCells(7)}
                    {this.CreateCells(8)}
                    {this.CreateCells(9)}
                    {this.CreateCells(10)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(11)}
                    {this.CreateCells(12)}
                    {this.CreateCells(13)}
                    {this.CreateCells(14)}
                    {this.CreateCells(15)}
                    {this.CreateCells(16)}
                    {this.CreateCells(17)}
                    {this.CreateCells(18)}
                    {this.CreateCells(19)}
                    {this.CreateCells(20)}
                    {this.CreateCells(21)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(22)}
                    {this.CreateCells(23)}
                    {this.CreateCells(24)}
                    {this.CreateCells(25)}
                    {this.CreateCells(26)}
                    {this.CreateCells(27)}
                    {this.CreateCells(28)}
                    {this.CreateCells(29)}
                    {this.CreateCells(30)}
                    {this.CreateCells(31)}
                    {this.CreateCells(32)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(33)}
                    {this.CreateCells(34)}
                    {this.CreateCells(35)}
                    {this.CreateCells(36)}
                    {this.CreateCells(37)}
                    {this.CreateCells(38)}
                    {this.CreateCells(39)}
                    {this.CreateCells(40)}
                    {this.CreateCells(41)}
                    {this.CreateCells(42)}
                    {this.CreateCells(43)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(44)}
                    {this.CreateCells(45)}
                    {this.CreateCells(46)}
                    {this.CreateCells(47)}
                    {this.CreateCells(48)}
                    {this.CreateCells(49)}
                    {this.CreateCells(50)}
                    {this.CreateCells(51)}
                    {this.CreateCells(52)}
                    {this.CreateCells(53)}
                    {this.CreateCells(54)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(55)}
                    {this.CreateCells(56)}
                    {this.CreateCells(57)}
                    {this.CreateCells(58)}
                    {this.CreateCells(59)}
                    {this.CreateCells(60)}
                    {this.CreateCells(61)}
                    {this.CreateCells(62)}
                    {this.CreateCells(63)}
                    {this.CreateCells(64)}
                    {this.CreateCells(65)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(66)}
                    {this.CreateCells(67)}
                    {this.CreateCells(68)}
                    {this.CreateCells(69)}
                    {this.CreateCells(70)}
                    {this.CreateCells(71)}
                    {this.CreateCells(72)}
                    {this.CreateCells(73)}
                    {this.CreateCells(74)}
                    {this.CreateCells(75)}
                    {this.CreateCells(76)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(77)}
                    {this.CreateCells(78)}
                    {this.CreateCells(79)}
                    {this.CreateCells(80)}
                    {this.CreateCells(81)}
                    {this.CreateCells(82)}
                    {this.CreateCells(83)}
                    {this.CreateCells(84)}
                    {this.CreateCells(85)}
                    {this.CreateCells(86)}
                    {this.CreateCells(87)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(88)}
                    {this.CreateCells(89)}
                    {this.CreateCells(90)}
                    {this.CreateCells(91)}
                    {this.CreateCells(92)}
                    {this.CreateCells(93)}
                    {this.CreateCells(94)}
                    {this.CreateCells(95)}
                    {this.CreateCells(96)}
                    {this.CreateCells(97)}
                    {this.CreateCells(98)}
                </div>
                <div style={ObjAdd.StyleCellsRow}>
                    {this.CreateCells(99)}
                    {this.CreateCells(100)}
                    {this.CreateCells(101)}
                    {this.CreateCells(102)}
                    {this.CreateCells(103)}
                    {this.CreateCells(104)}
                    {this.CreateCells(105)}
                    {this.CreateCells(106)}
                    {this.CreateCells(107)}
                    {this.CreateCells(108)}
                    {this.CreateCells(109)}
                </div>
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