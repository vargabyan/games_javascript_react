import React, { useState, useEffect }  from 'react';
import imgTank1 from "./image/tank1.png";
import Shell from "./shell"
import "./index.css";


function Tank (){
    const [myTankstate, setMyTankstate] = useState(null)
    const [moveTankXstate, setMoveTankXstate] = useState(0)
    const [moveTankYstate, setMoveTankYstate] = useState(0)
    const [rotateTankstate, setRotateTankstate] = useState("rotate(180deg)")
    const [firestate, setFirestate] = useState(false)
    const [keyFirestate, sgetKeyFirestate] = useState(true)
    

    useEffect(() => {
        setMyTankstate(
            <div style={{
                width: "50px",
                height: "50px",
                marginLeft: moveTankXstate,
                marginTop: moveTankYstate,
                position: "absolute",
            }}>
                <img 
                    className="myTankImg"  
                    alt="imgTank" src={imgTank1} 
                    style={{
                        width: "50px",
                        height: "50px",
                        transform: rotateTankstate,
                        position: "relative",
                    }}
                />
            </div>
        )

    }, [moveTankXstate, moveTankYstate, rotateTankstate,])

    function TankFire() {
        
        setFirestate(true)
        
        setTimeout(()=>{

            setFirestate(false)
        }, 0)
    }
    
    function Move() {
        document.onkeydown = (event) =>{
            if (event.code === "Numpad0") {

                if (keyFirestate)
                TankFire()
                setKeyFirestate(false)
            }
    
            if (event.code === "ArrowRight") {
                
                setRotateTankstate("rotate(270deg)")
                
                if (rotateTankstate === "rotate(270deg)") {
                    setMoveTankXstate(moveTankXstate + 10)
                } 
            }
            if (event.code === "ArrowLeft") {

                setRotateTankstate("rotate(90deg)")

                if (rotateTankstate === "rotate(90deg)") {
                    setMoveTankXstate(moveTankXstate - 10)
                }
            }
            if (event.code === "ArrowUp") {

                setRotateTankstate("rotate(180deg)")

                if (rotateTankstate === "rotate(180deg)") {
                    setMoveTankYstate(moveTankYstate - 10)
                }
            }
            if (event.code === "ArrowDown") {

                setRotateTankstate("rotate(0deg)")

                if (rotateTankstate === "rotate(0deg)") {
                    setMoveTankYstate(moveTankYstate + 10)
                }
            }
        }
    } 

    return (
        <div className={"tankGlobalDiv"}>
            {/* <div className={"test"}> */}
                {myTankstate}
                {Move()}
                <Shell 
                    firestate={firestate} 
                    moveTankXstate={moveTankXstate}
                    moveTankYstate={moveTankYstate}
                    rotateTankstate={rotateTankstate}
                    setKeyFirestate={setKeyFirestate}
                />
            {/* </div> */}
        </div>
    )
}

export default Tank