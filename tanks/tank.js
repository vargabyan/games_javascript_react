import React, { Component } from 'react';
import Additional from "./additional.js";


class Tank extends Component{

    Move = ()=>{
        document.onkeydown = (event) =>{
            console.log(event.code)

            if (event.code === "ArrowRight") {
                console.log("+++");
                Additional.ArrowRight += 10
                document.getElementsByClassName("tankImg")[0].style.marginLeft = Additional.ArrowRight + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(270deg)"
            }
            if (event.code === "ArrowDown") {
                console.log("+++");
                Additional.ArrowDown += 10
                document.getElementsByClassName("tankImg")[0].style.marginTop = Additional.ArrowDown + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(0deg)"
            }
            if (event.code === "ArrowUp") {
                console.log("+++");
                Additional.ArrowDown -= 10
                document.getElementsByClassName("tankImg")[0].style.marginTop = Additional.ArrowDown + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(180deg)"
            }
            if (event.code === "ArrowLeft") {
                console.log("+++");
                Additional.ArrowRight -= 10
                document.getElementsByClassName("tankImg")[0].style.marginLeft = Additional.ArrowRight + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(90deg)"
            }
        }
    } 

    render(){
        return(
            <div>
                <img className="tankImg" alt="" src="./tank1.png" width="100" height="100"/>
                {this.Move()}
            </div>
        )
    }
}

export default Tank