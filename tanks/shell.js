import React from "react";
import imgShell from "./image/shell.png";



   let Fire = function(){

    let i = 0
    let shellSpedd = setInterval(()=>{
        i += 5
            document.getElementsByClassName("shellImg")[0].style.marginTop = i + "px"

        if (i === 500) {
            i = 0
            clearInterval(shellSpedd)
            
            document.getElementsByClassName("shellImg")[0].style.marginTop = i + "px"

            return null
        }
    },10)
    
    return( <img className="shellImg" alt="" src={imgShell} width="15" height="30" />)
}



export {Fire}

