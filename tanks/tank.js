import React, {useState}  from 'react';
import Additional from "./additional.js";
import imgTank1 from "./image/tank1.png";
import {Fire} from "./shell";
import "./index.css";


function Tank (){
    let [shellState, setShellState] = useState(null)

    const Move = ()=>{
        document.onkeydown = (event) =>{
            console.log(event.code)

            if (event.code === "Numpad0") {
                setShellState(shellState = Fire())

            }

            if (event.code === "ArrowRight") {
                console.log("+++");
                Additional.ArrowRight += 10
                document.getElementsByClassName("tankImg")[0].style.marginLeft = Additional.ArrowRight + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(270deg)"
                // document.getElementsByClassName("shellImg")[0].style.transform = "rotate(270deg)"
            }
            if (event.code === "ArrowDown") {
                console.log("+++");
                Additional.ArrowDown += 10
                document.getElementsByClassName("tankImg")[0].style.marginTop = Additional.ArrowDown + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(0deg)"
                // document.getElementsByClassName("shellImg")[0].style.transform = "rotate(0deg)"
            }
            if (event.code === "ArrowUp") {
                console.log("+++");
                Additional.ArrowDown -= 10
                document.getElementsByClassName("tankImg")[0].style.marginTop = Additional.ArrowDown + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(180deg)"
                // document.getElementsByClassName("shellImg")[0].style.transform = "rotate(180deg)"
            }
            if (event.code === "ArrowLeft") {
                console.log("+++");
                Additional.ArrowRight -= 10
                document.getElementsByClassName("tankImg")[0].style.marginLeft = Additional.ArrowRight + "px"
                document.getElementsByClassName("tankImg")[0].style.transform = "rotate(90deg)"
                // document.getElementsByClassName("shellImg")[0].style.transform = "rotate(90deg)"
            }
        }
    } 


    return(
        <div className={"tankGlobalDiv"}>
            <img className="tankImg" alt="imgTank" src={imgTank1} width="100" height="100"/>
            {Move()}
            {shellState}
        </div>
    )
}

export default Tank