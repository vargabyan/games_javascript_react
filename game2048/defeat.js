import React, { Component } from "react";
import Add from "./add";



class Defeat extends Component{
    render(){
        return (
            <div 
            className={"gameOff"} 
            style={Add.gameOffStyle}
            >
                <h2 style={{paddingTop: "150px"}}>Game over</h2>
            </div>
        )
    }
}

export default Defeat 